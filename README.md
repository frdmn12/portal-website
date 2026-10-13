## Definition

Portal Website merupakan website yang berisi informasi dan berita dari sebuah kota atau kabupaten. Beberapa informasi yang ditampilkan dapat bermacam macam seperti berita kesehatan, kemasyarakatan, pemerintahan ataupun informasi wisata didaerah tersebut. Website ini hadir dengan tampilan reponsive sehingga nantinnya website dapat digunakan dan diakses melalui dekstop atau mobile.

## Tech Use

Project ini dibangun menggunakan :

- React JS App
- Chakra UI (FrontEnd UI Library)
- GSAP + ScrollTrigger (animasi)

## Animasi

Animasi memakai [GSAP](https://gsap.com) dan dikonfigurasi di `src/animations/`.
Untuk menganimasikan elemen di halaman manapun cukup tambahkan atribut `data-*`
(hook `useReveal` dipasang sekali di `PageTransition`, jadi tidak perlu kode tambahan):

| Atribut                                                  | Fungsi                                                |
| -------------------------------------------------------- | ----------------------------------------------------- |
| `data-reveal="up"` (`down`, `left`, `right`, `zoom`, `fade`) | Elemen muncul saat di-scroll                          |
| `data-delay="0.2"` `data-duration="1"`                   | Mengatur waktu (detik)                                |
| `data-stagger="up"`                                      | Anak-anak elemen muncul berurutan saat masuk ke layar |

Animasi khusus (Hero, Navbar, halaman 404) ada di komponennya masing-masing. Semua
animasi otomatis dinonaktifkan jika pengguna mengaktifkan _reduced motion_ di perangkatnya.

## BackGround

Project ini ditujukkan untuk meredesign / recreate portal website dari daerah <a href="https://probolinggokab.go.id/"> Kab.Probolinggo </a>

## MockUp

<div align="center" > 
<img src="./src/assets/mockup/Mockup-2.jpg"
/>
</div>

---

