import { withMarkdownNotes } from '@storybook/addon-notes';

import Grid2020 from './grid-20-20'
import Grid2020Notes from './notes/grid-20-20.md'
import Grid2040 from './grid-20-40'
import Grid2040Notes from './notes/grid-20-40.md'
import Grid2020WithOffset from './grid-20-20-with-offset'
import Grid2020WithOffsetNotes from './notes/grid-20-20-with-offset.md'
import Grid2040WithOffsetAndMin from './grid-20-40-with-offset-and-min'
import Grid2040WithOffsetAndMinNotes from './notes/grid-20-40-with-offset-and-min.md'
import Grid2040WithOffsetAndMax from './grid-20-40-with-offset-and-max'
import Grid2040WithOffsetAndMaxNotes from './notes/grid-20-40-with-offset-and-max.md'

export default {
  '网格20x20' : withMarkdownNotes(Grid2020Notes)(() => (new Grid2020)),
  '网格20x40' : withMarkdownNotes(Grid2040Notes)(() => (new Grid2040)),
  '网格20x20，偏移量为10x10' : withMarkdownNotes(Grid2020WithOffsetNotes)(() => (new Grid2020WithOffset)),
  '网格20x40具有10x20偏移和minHeight，minWidth' : withMarkdownNotes(Grid2040WithOffsetAndMinNotes)(() => (new Grid2040WithOffsetAndMin)),
  '网格20x40具有10x20偏移和maxHeight，maxWidth' : withMarkdownNotes(Grid2040WithOffsetAndMaxNotes)(() => (new Grid2040WithOffsetAndMax)),
}
