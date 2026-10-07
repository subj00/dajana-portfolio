import novaSImage from '@/assets/images/profile/novas.jpg';
import socialStudioImage from '@/assets/images/profile/socialstudio.jpg';
import survivorImage from '@/assets/images/profile/survivor.jpg';
import tvShowImage from '@/assets/images/profile/tvshow.jpg';
import type { Project } from '@/types/project';

/** Portfolio cards, in display order. */
export const projects: Project[] = [
  {
    slug: 'social-stud1o',
    title: 'Social Stud1o',
    description:
      'Lični projekat posvećen digitalnom marketingu, društvenim mrežama i kreativnim kampanjama. Mesto gde kroz sadržaj spajam iskustvo iz prakse, analizu trendova i svoj pogled na marketing.',
    image: socialStudioImage,
    imageAlt: 'Dajana Subotić za radnim stolom, sa tabletom u rukama',
    // Tall photo: keep her and the desk, not the ceiling.
    imagePosition: '50% 56%',
  },
  {
    slug: 'tv-nova-s',
    title: 'TV Nova S',
    description:
      'Rad na digitalnom nastupu televizije Nova S kroz društvene mreže i različite formate sadržaja. Fokus na kreiranju, prilagođavanju i distribuciji sadržaja koji prati program, aktuelne teme i navike publike.',
    image: novaSImage,
    imageAlt: 'Dajana Subotić ispred panoa sa logotipom televizije Nova S',
  },
  {
    slug: 'kuca-sa-1000-vrata',
    title: 'Kuća sa 1000 vrata',
    description:
      'Rad na razvoju i digitalnom predstavljanju emisije, uz aktivno učešće u kreativnom procesu i samom sadržaju. Pored osmišljavanja i prilagođavanja sadržaja za društvene mreže, učestvujem i u realizaciji pojedinih kreativnih formata pred kamerom.',
    image: tvShowImage,
    imageAlt: 'Plakat emisije „Kuća sa 1000 vrata“ sa likom Zage',
    // Square poster: keep the show title and the face; the caption at the
    // bottom falls outside the frame rather than being cut through.
    imagePosition: '50% 8%',
  },
  {
    slug: 'survivor-event',
    title: 'Survivor event',
    description:
      'Učešće u organizaciji i digitalnoj promociji Survivor događaja, uključujući saradnju sa influenserima, koordinaciju sadržaja i komunikaciju na društvenim mrežama.',
    image: survivorImage,
    imageAlt: 'Dajana Subotić tokom igre na Survivor događaju',
  },
];
