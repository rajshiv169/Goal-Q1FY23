import { AnimationBuilder } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { STEP_TYPES } from 'src/app/dummyData';
import { Status, Step } from '../models/step';
import { OnboardingStore } from '../onboarding.store';
import { AnimationHelper } from '../utils/animationHelper';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  providers: [OnboardingStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingComponent extends AnimationHelper implements OnInit {
  FINISHED = Status.FINISHED;
  IN_PROGRESS = Status.IN_PROGRESS;
  stepList$ = this.store.stepList$;
  currentStepIndex$ = this.store.step$;
  selectedStep$ = this.store.finalizedStep$;
  length: number;
  type = STEP_TYPES;
  constructor(
    private readonly store: OnboardingStore,
    builder: AnimationBuilder
  ) {
    super(builder);
  }

  ngOnInit(): void {
    this.store
      .select((s) => s.stepsLength)
      .subscribe((length) => (this.length = length));
    this.init();
  }

  private init(): void {
    this.store.setLength();
    this.store.updateStep({ ind: 0 });
  }

  trackByFn(_, item): number {
    return item.stepIndex;
  }

  prev(index: number, el: HTMLElement) {
    this.animate(this.slideOut, el).onDone(() => {
      this.store.undoCurrentStep();
      this.store.updateStep({ ind: index - 1, undo: true });
      this.animate(this.slideIn, el);
    });
  }

  next(index: number, el: HTMLElement) {
    this.animate(this.slideOut, el).onDone(() => {
      if (index < this.length - 1) {
        this.store.finishCurrentStep();
        this.store.updateStep({ ind: index + 1 });
        this.animate(this.slideIn, el);
      } else {
        this.store.finishCurrentStep();
      }
    });
  }

  collapse(item: Step, itemRef: HTMLLIElement) {
    if (item.collapsed && item.subStep && item.subStep.length > 0) {
      const { height } = itemRef.getBoundingClientRect();
      let len = item.subStep.length;
      if (item.data) len += 1;
      const marginTop = 15;
      const subStepTotalHeight = (25 + marginTop) * len;
      const stepItemHeight = height > 30 ? 30 : height;

      return {
        height: `${stepItemHeight + subStepTotalHeight}px`,
      };
    }
    return {
      color: 'inherit',
    };
  }
}
