import type { CareerGroup } from '@/types/experience';

/**
 * Content of the "Karijera i obrazovanje" section. Groups and entries are
 * rendered in the order they appear here.
 */
export const careerGroups: CareerGroup[] = [
  {
    title: 'Radno iskustvo',
    entries: [
      {
        title: 'Social Media Manager',
        subtitle: 'Televizija Nova S',
        period: '2021–2023',
      },
      {
        title: 'Digital Marketing Manager',
        subtitle: 'Televizija Nova S',
        period: '2023–danas',
      },
      {
        title: 'Koautor i glumica u dečijoj emisiji "Kuća sa 1000 vrata"',
        subtitle: 'Televizija Nova S',
        period: '2025–danas',
      },
    ],
  },
  {
    title: 'Obrazovanje',
    entries: [
      {
        title: 'Filološki fakultet, osnovne studije',
        subtitle: 'Italijanski jezik, književnost i kultura',
        period: '2016–2020',
      },
      {
        title: 'Fakultet organizacionih nauka, master studije',
        subtitle: 'Marketing menadžment i odnosi sa javnošću',
        period: '2021–2022',
      },
    ],
  },
  {
    title: 'Profesionalna priznanja',
    entries: [
      {
        title: 'Najkreativnije vođenje društvenih mreža',
        subtitle: 'Digital Awards',
        period: '2024',
      },
      {
        title: 'Marketing Director Course Certificate',
        subtitle: 'Next MBA',
        period: '2021–2022',
      },
    ],
  },
];
