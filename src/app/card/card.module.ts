import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardDateComponent } from './card-date/card-date.component';
import { CardDescriptionComponent } from './card-description/card-description.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardStatSegmentComponent } from './card-stat-segment/card-stat-segment.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,
    CardContentComponent,
    CardDateComponent,
    CardDescriptionComponent,
    CardImageComponent,
    CardStatsComponent,
    CardStatSegmentComponent,
    CardTitleComponent,
  ],
  exports: [
    CardComponent,
    CardContentComponent,
    CardDateComponent,
    CardDescriptionComponent,
    CardImageComponent,
    CardStatsComponent,
    CardStatSegmentComponent,
    CardTitleComponent,
  ],
})
export class CardModule {}
