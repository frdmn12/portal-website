import supports from '../assets/supports';
import sup1 from '../assets/supports/image 5.png';
import sup2 from '../assets/supports/image 6.png';
import sup3 from '../assets/supports/image 7.png';
import sup4 from '../assets/supports/image 8.png';
import sup5 from '../assets/supports/image 9.png';
import sup6 from '../assets/supports/image 10.png';
import sup7 from '../assets/supports/image 11.png';

export const TravelPlace = [
  {
    title: 'Gunung Argopuro',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-_46hK0MskO4%2FWkmYYHXvLuI%2FAAAAAAAAHZQ%2F2h_n_VNQ0rYqfjF1CocsmaCnPdW4xeYYACLcBGAs%2Fw1200-h630-p-k-no-nu%2Fgunung%252Bargopuro%252Bdanau%252Btaman%252Bhidup.jpg&f=1&nofb=1&ipt=7d74069ba6ba5418bc6cae6e86757f7bf7a6621a1531fad66e09ee4caac6df75&ipo=images',
    location: 'https://goo.gl/maps/3nr9Dm5YLRDCja35A',
  },
  {
    title: 'Gunung Bromo',
    image:
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    location: 'https://goo.gl/maps/4RBNztnZi7RmUrgo9',
  },
  {
    title: 'Candi Jabung',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkebudayaan.kemdikbud.go.id%2Fbpcbjatim%2Fwp-content%2Fuploads%2Fsites%2F33%2F2020%2F12%2FDSCN5303.jpg&f=1&nofb=1&ipt=ca28585797cd6c8a208a2d3278112486e5cc1dda94a594f911b4ff39eaa73115&ipo=images',
    location: 'https://goo.gl/maps/LYKXvTtBXHLPhmdG6',
  },
  {
    title: 'Air Terjun Umbulan',
    image:
      'https://travelnews.id/wp-content/uploads/2021/06/air-terjun-umbulan.jpg',
    location: 'https://goo.gl/maps/nZh8kt2F4XVtn84a8',
  },
  {
    title: 'Pulau Gili Ketapang',
    image:
      'https://wisatabagus.com/wp-content/uploads/2019/12/gili-ketapang-1.jpg',
    location: 'https://goo.gl/maps/EhFjKjzEqwcpfZVQA',
  },
  {
    title: 'Air Terjun Madakaripura',
    image:
      'https://2.bp.blogspot.com/-O4buBWq8AIk/VAv358OgOnI/AAAAAAAAAx4/k-mXnECDsts/s1600/madakaripura%2Bwaterfall.jpg',
    location: 'https://goo.gl/maps/mBPKAe4LTddYydMi9',
  },
  {
    title: 'Danau Ronggo Jalu',
    image:
      'https://tempatwisataindonesia.id/wp-content/uploads/2016/10/Danau-Ronggojalu.png',
    location: 'https://goo.gl/maps/ZkwUFhkh2SoHtiXS9',
  },
  {
    title: 'Ranu Agung',
    image: 'https://liburanyuk.co.id/wp-content/uploads/2021/11/@alinadamayanti-1024x768.jpg',
    location: 'https://goo.gl/maps/WstuT6VFQHY4yrTz8',
  },
  {
    title: 'Pantai Bentar',
    image:
      'https://1.bp.blogspot.com/-to3msPw9Xug/XZwHEMTkC5I/AAAAAAAADNM/QV2HMpaCUVEM3LPJEi5ZsGWFruIaQ9sUACLcBGAsYHQ/s1600/sunset-di-pantai-bentar-probolinggo.jpg',
    location: 'https://goo.gl/maps/JkViM9sahZDZGuXu5',
  },
];

export const institutionSupports = [
  {
    title: 'FKPS',
    image: sup1,
  },
  {
    title: 'KOTAKU',
    image: sup2,
  },
  {
    title: 'LPSE',
    image: sup3,
  },
  {
    title: 'LHKPN',
    image: sup4,
  },
  {
    title: 'JARINGAN DOKUMENTASI DAN INFORMASI HUKUM',
    image: sup5,
  },
  {
    title: 'WBS',
    image: sup6,
  },
  {
    title: 'LAPOR',
    image: sup7,
  },
];

// ---------------------------------------------------------------------------
// SAMPLE NEWS
// Everything below is dummy content for design/demo purposes. It is written to
// be generic on purpose (no real officials, figures or places) and photos are
// stock images from Unsplash, hot-linked. Replace with real articles when a
// source is available, then set SHOW_SAMPLE_NEWS_NOTICE to false.
// ---------------------------------------------------------------------------
export const SHOW_SAMPLE_NEWS_NOTICE = true;

const photo = (id, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

// "Berita Terbaru" on the landing page. `image` is optional: a card without one
// is rendered text-only.
export const latestNews = [
  {
    title:
      'Warga Dan ASN Kompak Bersih-Bersih Pantai Dalam Gerakan Kerja Bhakti Massal',
    image: photo('1618477461853-cf6ed80faba5'),
    date: '10 / 10 / 2026',
    caption:
      'Ratusan warga, aparatur sipil negara, dan komunitas pemuda bergotong royong membersihkan area pesisir dari sampah plastik pada Sabtu pagi. Kegiatan yang menjadi agenda rutin triwulanan ini diharapkan menumbuhkan kebiasaan menjaga lingkungan sejak dini.',
    category: 'Kemasyarakatan',
  },
  {
    title: 'Penyaluran Paket Bantuan Pangan Menyasar Ribuan Keluarga Penerima Manfaat',
    image: photo('1593113616828-6f22bca04804'),
    date: '09 / 10 / 2026',
    caption:
      'Pemerintah daerah bersama relawan mengemas dan menyalurkan paket bahan pokok bagi keluarga prasejahtera di sejumlah kecamatan. Penyaluran dilakukan bertahap agar tepat sasaran dan tidak menimbulkan antrean panjang di titik pembagian.',
    category: 'Kemasyarakatan',
  },
  {
    title: 'Pemerintah Daerah Dan DPRD Sepakati Rancangan Anggaran Perubahan Tahun Berjalan',
    image: photo('1573165231977-3f0e27806045'),
    date: '08 / 10 / 2026',
    caption:
      'Setelah melalui pembahasan bersama tim anggaran, rancangan perubahan anggaran disepakati dengan penekanan pada pelayanan dasar, perbaikan infrastruktur jalan, serta penguatan sektor pendidikan dan kesehatan.',
    category: 'Pemerintahan',
  },
];

export const pemerintahanNews = [
  {
    title: 'Upacara Peringatan Hari Besar Nasional Berlangsung Khidmat Di Alun-Alun',
    image: photo('1630107124278-699d0352537e'),
    date: '17 / 08 / 2026',
    caption:
      'Ribuan peserta dari unsur pemerintah, TNI, Polri, pelajar, dan masyarakat mengikuti upacara bendera dengan tertib. Upacara ditutup dengan pembacaan doa dan penampilan kesenian daerah.',
  },
  {
    title: 'Rapat Koordinasi Lintas Perangkat Daerah Bahas Percepatan Program Prioritas',
    image: photo('1573167507387-6b4b98cb7c13'),
    date: '05 / 10 / 2026',
    caption:
      'Rapat dipimpin sekretaris daerah dan dihadiri para kepala dinas. Pembahasan mencakup progres program prioritas, serapan anggaran, serta langkah percepatan agar target tahun ini tercapai tepat waktu.',
  },
];

export const smallPemerintahanNews = [
  {
    title: 'Apel Gabungan Awali Rangkaian Kegiatan Peringatan Hari Besar Nasional',
    image: photo('1629459690336-3b4bccd47f6b', 800),
    date: '15/08/2026',
  },
  {
    title: 'Sidang Paripurna Dewan Bahas Rancangan Peraturan Daerah Baru',
    image: photo('1607778417094-1fef13315e6e', 800),
    date: '30/09/2026',
  },
  {
    title: 'Musrenbang Tingkat Kecamatan Serap Usulan Pembangunan Dari Warga',
    image: photo('1573164574572-cb89e39749b4', 800),
    date: '25/09/2026',
  },
];

export const pendidikanNews = [
  {
    title: 'Pelatihan Guru Penggerak Angkatan Baru Fokus Pada Pembelajaran Berdiferensiasi',
    date: '08 / 10 / 2026',
    image: photo('1509062522246-3755977927d7'),
    caption:
      'Puluhan guru jenjang PAUD, SD, dan SMP mengikuti pelatihan selama tiga hari untuk memperdalam metode pembelajaran yang menyesuaikan kebutuhan setiap siswa. Peserta juga menyusun rencana tindak lanjut untuk diterapkan di sekolah masing-masing.',
  },
  {
    title: 'Dinas Pendidikan Gelar Lokakarya Peningkatan Mutu Pendidikan Anak Usia Dini',
    date: '02 / 10 / 2026',
    image: photo('1577896851231-70ef18881754'),
    caption:
      'Lokakarya menghadirkan narasumber praktisi PAUD dan membahas penguatan literasi dini, pengelolaan kelas ramah anak, serta pelibatan orang tua dalam proses belajar.',
  },
];

export const smallPendidikanNews = [
  {
    title: 'Siswa Ikuti Kegiatan Literasi Pagi Untuk Menumbuhkan Minat Baca',
    image: photo('1581726707445-75cbe4efc586', 800),
    date: '20/09/2026',
  },
  {
    title: 'Renovasi Ruang Kelas Sekolah Dasar Ditargetkan Rampung Akhir Tahun',
    image: photo('1580582932707-520aed937b7b', 800),
    date: '12/09/2026',
  },
  {
    title: 'Seleksi Beasiswa Prestasi Dibuka Bagi Pelajar Berprestasi',
    image: photo('1740635341299-3b8e3490f546', 800),
    date: '05/09/2026',
  },
];

export const kesehatanNews = [
  {
    title: 'Gerakan Makan Telur Dicanangkan Untuk Cegah Stunting Pada Anak',
    date: '06 / 10 / 2026',
    image: photo('1490645935967-10de6ba17061'),
    caption:
      'Pemerintah daerah mencanangkan gerakan makan telur bagi balita dan ibu hamil sebagai upaya menurunkan risiko stunting. Telur dipilih karena mudah didapat, terjangkau, dan kaya protein.',
  },
  {
    title: 'Puskesmas Lakukan Pemeriksaan Kesehatan Gratis Bagi Warga Lanjut Usia',
    date: '01 / 10 / 2026',
    image: photo('1612349317150-e413f6a5b16d'),
    caption:
      'Pemeriksaan meliputi cek tekanan darah, gula darah, dan kolesterol, disertai konsultasi gizi. Petugas juga mengingatkan pentingnya pola hidup sehat dan kontrol rutin ke fasilitas kesehatan.',
  },
];

export const smallKesehatanNews = [
  {
    title: 'Posyandu Aktif Dorong Imunisasi Lengkap Bagi Anak',
    image: photo('1532938911079-1b06ac7ceec7', 800),
    date: '28/09/2026',
  },
  {
    title: 'Warga Diajak Mengenali Faktor Risiko Hipertensi Dan Diabetes Sejak Dini',
    image: photo('1513442542250-854d436a73f2', 800),
    date: '22/09/2026',
  },
  {
    title: 'Tenaga Kesehatan Ikuti Penyegaran Penanganan Penyakit Tidak Menular',
    image: photo('1584432810601-6c7f27d2362b', 800),
    date: '15/09/2026',
  },
];
