import { IPaperConfig } from './IPaperConfig';

// Note: I am not scalinf one paper size, because papers are rounded exactly
// @see https://cs.wikipedia.org/wiki/Form%C3%A1t_pap%C3%ADru
// TODO: Generate automatically all from the table
export const PAPERS: IPaperConfig[] = [
    /*
     TODO: Remove from main package
    {
        name: 'A2',
        size: new Vector(42.0, 59.4),
    },
    {
        name: 'A3',
        size: new Vector(29.7, 42.0),
    },
    {
        name: 'A4',
        size: new Vector(21, 29.7),
    },
    {
        name: 'A5',
        size: new Vector(14.8, 21.0),
    },
    */

    {
      name: 'FullHD',
      size: new Vector(14.8, 21.0),
  },
];
