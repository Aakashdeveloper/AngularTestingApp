import {ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DiaryComponent } from "./diary.component";
import { DiaryService } from "../../Services/diary.service";
import { DiaryEntryModel } from "../../Models/DiaryEntryModel";
import { DebugElement } from "@angular/core";

describe('TestingDiaryComponent',()=>{
    let component: DiaryComponent;
    let fixture: ComponentFixture<DiaryComponent>;
    let el: DebugElement;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DiaryComponent]
      });
      fixture = TestBed.createComponent(DiaryComponent);
      component = fixture.debugElement.componentInstance;
      el = fixture.debugElement;
    });

    it("Should create Diary Component",() => {
        expect(component).toBeTruthy()
    })

    it('should have a h5 element with the text "What on your mind today?"', () => {
        expect(fixture.nativeElement.querySelector('h5').innerText).toBe('What on your mind today?');
    });

    it('should use Jasmine method', () => {
        expect(el.query(By.css('button')).nativeElement.innerText).toBe('Save Entry');
        expect(el.query(By.css('h5')).nativeElement.innerText).toBe('What on your mind today?');
    });


    it('should have a button and textarea', () => {
        expect(fixture.nativeElement.querySelector('button')).withContext("Can't find button").toBeTruthy();
        expect(fixture.nativeElement.querySelector('textarea')).withContext("Can't find textarea").toBeTruthy();
    });

    it("should use the diary entries from the service", () => {
        const diaryService = fixture.debugElement.injector.get(DiaryService);
        fixture.detectChanges();
        expect(diaryService.getDiaryEntries()).toEqual(component.diaryEntries);
      })

    it("should create a new post", () => {
        component.entryText = "Random Text Entry";
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.innerHTML).toContain("Random Text Entry");
    });

    it("should disable the button when textArea is empty", () => {
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css("button"));
        expect(button.nativeElement.disabled).toBeTruthy();
    });

    it("should enable button when textArea is not empty", () => {
        component.entryText = "Text Area Testing Text";
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css("button"));
        expect(button.nativeElement.disabled).toBeFalsy();
    });

    it("should remove post upon card click", () => {
        component.entryText = "Fresh new entry";
        fixture.detectChanges();
    
        fixture.debugElement
          .query(By.css(".row"))
          .query(By.css(".card"))
          .triggerEventHandler("click", null);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.innerHTML).toContain("Fresh new entry");
      });
    
      it("should fetch data asynchronously", async () => {
        const fakedDiaryEnteries = [
          new DiaryEntryModel("New Entry on Nov", "9 Nov, 2024")
        ];
        const diaryService = fixture.debugElement.injector.get(DiaryService);
        let spy = spyOn(diaryService,"fetchDiaryEntriesFromServer").and.returnValue(
          Promise.resolve(fakedDiaryEnteries)
        );
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.fetchedEntries).toBe(fakedDiaryEnteries);
        });
      });
})