import { TestBed } from '@angular/core/testing';

import { DiaryService } from './diary.service';

describe('DiaryService', () => {
  let service: DiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DiaryService
      ]
    });
    service = TestBed.inject(DiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post within an array", () => {
    const entryText = "First Day of Diary Entry";
    service.addNewDiaryEntry(entryText);
    expect(service.diaryEntries.length).toBeGreaterThanOrEqual(1);
  });

  it("should remove a created post from the array", () => {
    service.addNewDiaryEntry("First Day of Diary Entry");
    service.removeDiaryEntry(0);
    expect(service.diaryEntries.length).toBeLessThan(1);
  })
});
