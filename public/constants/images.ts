import temp from '@/public/assets/bamboo.png';
import hosomaki from '@/public/assets/hosomaki.png';
import futomaki from '@/public/assets/futomaki.png';
import soyMaki from '@/public/assets/soy-maki.png';
import uramaki1 from '@/public/assets/uramaki1.png';
import uramaki2 from '@/public/assets/uramaki2.png';
import uramaki3 from '@/public/assets/uramaki3.png';
import nigiri from '@/public/assets/nigiri.png';
import gunkan from '@/public/assets/gunkan.png';

import secHosomaki from '@/public/assets/sec-hosomaki.png';
import secFutomaki from '@/public/assets/sec-futomaki.png';
import secUramaki from '@/public/assets/sec-uramaki.png';
import secSpecial from '@/public/assets/sec-special.png';
import onigiri from '@/public/assets/onigiri.png';

const images = {
  temp,
  display: {
    hosomaki,
    futomaki, soyMaki,
    uramaki: {
      one: uramaki1,
      two: uramaki2,
      three: uramaki3,
    },
    nigiri,
    gunkan,
  },
  section: {
    hosomaki: secHosomaki,
    futomaki: secFutomaki,
    uramaki: secUramaki,
    special: secSpecial,
    desserts: onigiri
  },
};

export default images;