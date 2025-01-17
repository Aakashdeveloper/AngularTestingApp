import { Component } from "@angular/core";
import { HighlightEntryDirective } from "./highlight-entry.directive";
import { ComponentFixture, TestBed } from "@angular/core/testing";


@Component({
    selector: 'test-comment',
    standalone: true,
    template: `
      <div appHighlightEntry>testing</div>
    `,
    imports: [HighlightEntryDirective]
})
class TestComponent { }

describe("HighlightEntryDirective", () => {
    let fixture: ComponentFixture<TestComponent>
    let divElement: HTMLElement
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(TestComponent);
        divElement = fixture.nativeElement.querySelector("div")
        fixture.detectChanges()
    })

    it("should change font family when mouseenter",()=>{
        divElement.dispatchEvent(new Event("mouseenter"))
        expect(divElement.style.fontFamily).toBe('cursive')
    })
    it("should reset font family when mouseleave",()=>{
        divElement.dispatchEvent(new Event("mouseenter"))
        divElement.dispatchEvent(new Event("mouseleave"))
        expect(divElement.style.fontFamily).toBe('Arial')
    })
})