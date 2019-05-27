import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { ReplaySubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { spreadTuple } from 'src/app/shared/utils/function';
import { PresenceControlEntry } from '../models/presence-control-entry.model';
import { ViewMode } from '../presence-control-state.service';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { StorageService } from 'src/app/shared/services/storage.service';

const FALLBACK_AVATAR = 'assets/images/avatar-placeholder.png';

@Component({
  selector: 'erz-presence-control-entry',
  templateUrl: './presence-control-entry.component.html',
  styleUrls: ['./presence-control-entry.component.scss']
})
export class PresenceControlEntryComponent implements OnInit, OnChanges {
  @Input() entry: PresenceControlEntry;
  @Input() viewMode: ViewMode;

  @Output() togglePresenceType = new EventEmitter<PresenceControlEntry>();

  @HostBinding('class') get presenceCategory(): string {
    return this.entry.presenceCategory;
  }

  private studentId$ = new ReplaySubject<number>(1);
  private avatarUrl$ = combineLatest(
    this.settings.apiUrl$,
    this.studentId$
  ).pipe(map(spreadTuple(this.buildAvatarUrl.bind(this))));

  avatarStyles$ = this.avatarUrl$.pipe(map(this.buildAvatarStyles.bind(this)));

  constructor(
    private settings: SettingsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.entry) {
      this.studentId$.next(
        changes.entry.currentValue.lessonPresence.StudentRef.Id
      );
    }
  }

  get presenceCategoryIcon(): string {
    switch (this.entry.presenceCategory) {
      case 'absent':
        return 'cancel';
      case 'late':
        return 'watch_later';
      default:
        return 'check_circle';
    }
  }

  get isListViewMode(): boolean {
    return this.viewMode === ViewMode.List;
  }

  private buildAvatarUrl(apiUrl: string, studentId: number): string {
    const accessToken = this.storageService.getAccessToken() || '';
    return `${apiUrl}/Files\/personPictures/${studentId}?token=${accessToken}`;
  }

  private buildAvatarStyles(url: string): { [key: string]: string } {
    return {
      'background-image': `url(${url}), url(${FALLBACK_AVATAR})`
    };
  }
}
