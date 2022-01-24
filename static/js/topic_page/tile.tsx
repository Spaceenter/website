/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StatVarMetadata } from "../types/stat_var";

export interface RankingMetadata {
  showHighest: boolean;
  showLowest: boolean;
  showIncrease: boolean;
  showDecrease: boolean;

  diffBaseDate: string;

  highestTitle?: string;
  lowestTitle?: string;
  increaseTitle?: string;
  decreaseTitle?: string;
}

export interface HighlightMetadata {
  description: string;
}

export interface Tile {
  title?: string;
  description: string;
  type: string;
  statVarOverride?: StatVarMetadata[];
  rankingMetadata?: RankingMetadata;
  highlightMetadata?: HighlightMetadata;
}