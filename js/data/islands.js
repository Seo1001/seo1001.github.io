// 국내 인기 섬 50개 데이터입니다.
// yeosuScores 값이 있는 섬은 사용자가 제공한 CSV 기준 2026여수세계섬박람회 섬으로 표시합니다.
const imageByType = {
  휴양: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  자연: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  가족: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  역사: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=900&q=80",
  힐링: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=900&q=80",
  액티비티: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
};

const imageByIsland = {
  가거도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEpWPIOB1SF5jUOe193Jw0vm9Bx9kuPg3SpwtzTRgolPEw7YDK8ghtLF30fdGnt70CWIpf9lt6V26u0CltWnD4funOctXla_8WP_vGYo7JM6cYgI4Y_1S4_V1CBWAd9ODN1JYSP=w1080-h624-n-k-no",
  가파도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQwjBGHPy8aHO1lRb4y6_7q0EnpzH4NBIwBax7hvUdfxCnu1RmQn1mpTqQVXOgp-Xn2RB9TnNFWJLAcfPtTRJfE4jU&s=19",
  강화도: "https://upload.wikimedia.org/wikipedia/commons/0/07/Ganghwa1.jpg",
  개도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_08.jpg",
  거문도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_05.jpg",
  거제도: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Geoje_Samsung_shipbuiding.jpg",
  관매도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE0pA_XehUBobN6QX0fqCiG1RDJbcZ63JAb9o0Qns5paIJKxYc0txgCDcpgreFwnNuhMCeCrCry8lDArYXbVa9kFJ23HgEJqVgNMhNvTLpl2vLP1LKJ89KCVGHbXMPOMUtbS2c=w1080-h624-n-k-no",
  교동도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFF5JGIQjhLLpudVJ2REt37-gtBiSGdNuEfmA8e5z99jskvIYWkkgi_f6tRd3hQLG-dHn7FlDhCpFUWqTfvze7kvGcb2F63lifhebmKRYWTzRiuKzwJ358YpwTVM8upoJ2J4h_m2g=w1080-h624-n-k-no",
  금오도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_06.jpg",
  남해도: "https://upload.wikimedia.org/wikipedia/commons/8/84/Namhae_Bridge-edit.jpg",
  낭도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_09.jpg",
  대청도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHurGHrTckLuw9Ano3kzubCvWR0mn2fwQccgXlMRE_ItRuBw0spCPC1QDVkReFTzr3xX8NNydk1S9z6GVpNzBsLOAdGCcpEpjcCt_R-B9T7tbDu3xV_RaYe4IxSi63X5B-P2K0bfQ=w1080-h624-n-k-no",
  덕적도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGJH6-NMWZFzeSUrPUhR7Ex0AKZz4Zm8m7Hyx4AJmdE1P7Sl6e4pJFPCoYzfGkfNJB-GgdTpXWJl4qLeBmD_GUGLQ6SI6MdKbROInp6GtzEISmo3sp5cThOvj-Kk6Pr9D8Cr_sGAg=w540-h312-n-k-no",
  독도: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dokdo_Photo.jpg",
  마라도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTvoBAqN09Zu11KuGjODWzRWyFzdyAVTYQVzwbM11_iJthuB4AsgxOAwj0Mu7kyshoI5sBlymiYtN6VzvlpGY08SVs&s=19",
  매물도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEH7RutgGDp7JGNBV_bRHOhspew38LyYKNTUQ2KF1zwHDp9xkS50SFJOIP0MyTtVHNIOSMMtjvssJBcvHWj6U9_zMf7z9wEMnC3D3RSsV4EWnt48xbe344sX1PJo5TNMbNuqF6O_w=w540-h312-n-k-no",
  무녀도: "https://i.namu.wiki/i/AcgtIhe7B418tN1DmcsubVk2Bta1qPqQMQ0IqrgcJGv4Ufz7tsc95F2_owEW1XTyDsJtsrOHb0uv29ezFTE_cOBDI5HcGS242Y7ZHd5JrJNickS07NKsU0A3PZe5KuEo-pjKRsCAg4zE7oCvRWBC5w.webp",
  무의도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT0Lw-3FZ00dpkY_GVxSFb9hQkDa8Yg_Fe_umPFUTWrKhMw9V8njYxCBz54-QFLvijaVgXSnv9E_WUlof3dkIIn3LQ&s=19",
  백도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_05_2.jpg",
  백령도: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKSH4ilCnNn7TP07S8zSEMBcLPBeeQOOAIA&s",
  보길도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfZ6eoi0ZIAcTiuyW4KoYgwVnkaTuyObwaFKv7WQbLkQGZUSAS-EsZnCqgWCNKNQ3bCjuzWH551RPvmK2c0WYgjolPDSBFibdtQgit779r2LpE5ptH1Nrg-uRajSDMqzKxfCuqYw=w1080-h624-n-k-no",
  비양도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRE9hgjCjhaOPMb2UEg75MThxWnnWQzVB1_-1W0fo5Ikt-JaWOYs_EcdtxmpnHcAOhszoUyr049ydX4zyvBikYHOoA&s=19",
  비진도: "https://cdn.suhyupnews.co.kr/news/photo/201601/12802_12057_5649.jpg",
  사도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_01.jpg",
  사량도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQn8teofiicJ9rIXeg3YSFF5hfBYHXZcBHGRUROOUcSdsWlQ-VvrquZ_wCKybVhvNwf1NCx1ndi2KCJn_GxJebAfb8&s=19",
  선유도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSX4yX_U36tBTeiwD7rxmqvZx2H85uWZguQBfKe1kID89UhV0Q_2BtpzIFfo0mjId3LjLKL3ReQJbZctGbD9FHlvLMc&s=19",
  소매물도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSSASNmmcPYgJGpdoMDDDr0sBtqxWg60vTLNM-zEnh3QVs7-rTG_pG8NggARovakT2BiU_H4QwiBgiauskONPV1vYw&s=19",
  손죽도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_02.jpg",
  승봉도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF43QR2ZUypU_zwewSegELcZlsFQmADk_U7C0XO-n_JNLq1LmX0Ft_lE8VHsoGjKmTh8rUowYSnK0ZRWVZYalXy8hgtRuIYEWHpibqPSKcPxwIv97wKckQNhagf9_4zSrTS7HClP25k8Ktt=w1080-h624-n-k-no",
  안도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_07.jpg",
  안면도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRfG6DhJ18S7o8NgoyHtNuDwu0KHFStSoVIuoEnqnkVm2twuC_ZKqrmaBfVu3umrqJYU2eA381wgXUaCzVyxGDW6__-&s=19",
  연도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_04.jpg",
  완도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGLqnXT6pNfWRVdL0NompnvxFOMUISqQVObPYEVc6HeCUUtSk1dw31yhr0_XwqLqyM3rzEsRbkRUHk2JS7_877cL4j_FJHsDHigzjDSiQb87vDXbPmSDdVwWnRi1zkPiLlZnURf5g=w1080-h624-n-k-no",
  외도: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fd/fa/07/photo4jpg.jpg?w=900&h=500&s=1",
  외연도: "https://i.namu.wiki/i/fdd5QmWj6My8CH3PT0jGBIa8cYyV2PfpPgmQslsCEnadQIGotemhqI_Cq6CcfvIMioi_5RAMXGkEmZU3Gcibuc8Xr5x2rGh8uwrYScUU2Kj94RIesV7MU5SYFtkLwzHIJ9qtpQ-HjLdtcQ9AiuoF_Q.webp",
  욕지도: "https://i.namu.wiki/i/hRmV0W0NWMtbQeVEoRqS5q1oWTKEQxtyP8eZzVeVdSVDVT-RnLJAeeYvftW2m03fxLefzn3olL8ZeQlL-ZF-yBJdgzFwVX5bWXgETiGSQiPpFD7mf-UY4vjV1Y_xl2tBDaoOFpB1lbFA3zHRh9TF7A.webp",
  우도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF0aHw9rhT2PVeuGOWLg7n3ISWTkYPdIF7mUd1dQnR8fI2HdjyLOqpFzpB9Xm16apLyMj70QOM7-RY0nyTkCxiul8uxO7Nrfo4EfO0mZ4zU89N_go1J1LpUrefULxGoNLj0BXsC=w1080-h624-n-k-no",
  울릉도: "https://i.namu.wiki/i/YHd-XnjW4JfR-cvDEKafREnwJkEExfb263bG-M8jq1w9118CShun_PY8kyoJ9WuconaviiYV8oPy5zNPnF6Tlw.webp",
  장자도: "https://www.gunsan.go.kr/www/images/ntour/images/sub/05/img_beach11.jpg",
  제부도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHu4MjigXRDn4DrBvq2dIiYj1sMPWTwGES-mSMjyZ-KnWEy4RHtmkD2kSR2Kk-_I6ENP4TLj_YV6e5vlKl6mAQbMcqvMk8cmn3emTJ6Rf_YDS3hHUJxVqXL3DN4oTIAoj_y64P7=w1080-h624-n-k-no",
  제주도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGG1OXfcCf62JYVbhbOGdNbAD7feaMgrV_4epBS7iLSqGL6EbCi1-DUb1Rl38hazEnt5IN1iFCjfcP3enhiHTHJjla8QQ1XO_8e3zguIYa8mkY2kWwonVe2zV9xKsg6EpukHJhHxQ=w1080-h624-n-k-no",
  조발도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_12.jpg",
  진도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEAx6do1Oc6aKhTaXsKp3vKwQGQHjqmkQEPnQixvNQs7Dz6wnhPX2bKrqMKRhtpqSEHBsOMqJxrK9HzsutxviPXbvXx9JTXYNNMBa65qKZX2m3t0o86BK2uyMGPvQXDiStLqLRV=w1080-h624-n-k-no",
  청산도: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOrRUdcZClAVX2lZxLbEv63Jro3DKAiSXPw&s",
  초도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_03.jpg",
  추자도: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH5CpPc8Me8sLSs1ZMv9dN7a7mxIkrA5pUk4IokKD8xL1kL3K_p9AltIh-5FoYcz6bfF5BsQuKbiDH_OqwC4ZyLq8xo41op98q83KMVhxT9B41CaAcX-IMKiG1mYAwpTa0tZKbpiQ=w1080-h624-n-k-no",
  하화도: "https://www.yeosu.go.kr/tour/contents/1/260324/img_260323_10.jpg",
  한산도: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Korea-Tongyeong-Hansan_Island-Overview-01.jpg",
  홍도: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSmYQhj2bviGqKEIBkbB2z5FstJwkZQ2lx7SxlsPncY4Ev9Tqwj4q2mnfFILxjpeskhZ7f80DcWUquVH1SQ69safvg&s=19",
  흑산도: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Korea-Heuksando_Island-01.jpg"
};

const coordinatesByIsland = {
  가거도: { lat: 34.0741, lng: 125.1124 },
  가파도: { lat: 33.1696943, lng: 126.2713563 },
  강화도: { lat: 37.7066, lng: 126.4515 },
  개도: { lat: 34.6148, lng: 127.6718 },
  거문도: { lat: 34.0306, lng: 127.3095 },
  거제도: { lat: 34.8806, lng: 128.6212 },
  관매도: { lat: 34.244, lng: 126.052 },
  교동도: { lat: 37.7869, lng: 126.2916 },
  금오도: { lat: 34.5069, lng: 127.7524 },
  남해도: { lat: 34.8377, lng: 127.8924 },
  낭도: { lat: 34.6117, lng: 127.5441 },
  대청도: { lat: 37.8259, lng: 124.7049 },
  덕적도: { lat: 37.2263, lng: 126.1462 },
  독도: { lat: 37.2411, lng: 131.8644 },
  마라도: { lat: 33.1183409, lng: 126.2674014 },
  매물도: { lat: 34.6419, lng: 128.5769 },
  무녀도: { lat: 35.8176, lng: 126.4262 },
  무의도: { lat: 37.3858, lng: 126.4216 },
  백도: { lat: 34.0018, lng: 127.607 },
  백령도: { lat: 37.9666, lng: 124.6647 },
  보길도: { lat: 34.1576, lng: 126.5602 },
  비양도: { lat: 33.4083061, lng: 126.2272142 },
  비진도: { lat: 34.7163, lng: 128.4634 },
  사도: { lat: 34.5909377, lng: 127.555385 },
  사량도: { lat: 34.8451, lng: 128.2068 },
  선유도: { lat: 35.8129, lng: 126.4165 },
  소매물도: { lat: 34.6217, lng: 128.5484 },
  손죽도: { lat: 34.2875, lng: 127.3615 },
  승봉도: { lat: 37.1668123, lng: 126.3076432 },
  안도: { lat: 34.4857, lng: 127.8062 },
  안면도: { lat: 36.5144, lng: 126.3458 },
  연도: { lat: 34.4047, lng: 127.7965 },
  완도: { lat: 34.311, lng: 126.7551 },
  외도: { lat: 34.7697, lng: 128.7138 },
  외연도: { lat: 36.2283, lng: 126.0796 },
  욕지도: { lat: 34.6371, lng: 128.2618 },
  우도: { lat: 33.5040428, lng: 126.954978 },
  울릉도: { lat: 37.4844, lng: 130.9057 },
  장자도: { lat: 35.8108053, lng: 126.3969662 },
  제부도: { lat: 37.1691444, lng: 126.6240517 },
  제주도: { lat: 33.3617, lng: 126.5292 },
  조발도: { lat: 34.6346487, lng: 127.5582821 },
  진도: { lat: 34.4868, lng: 126.2634 },
  청산도: { lat: 34.1795, lng: 126.8588 },
  초도: { lat: 34.2327, lng: 127.2465 },
  추자도: { lat: 33.9465, lng: 126.3196 },
  하화도: { lat: 34.59261, lng: 127.6162479 },
  한산도: { lat: 34.7931, lng: 128.4864 },
  홍도: { lat: 34.6839, lng: 125.1999 },
  흑산도: { lat: 34.6845, lng: 125.4378 }
};

const rawIslands = [
  ["jeju", "제주도", "제주", "휴양", "항공/여객선", true, "3박 4일 이상", "봄, 가을", ["오름", "해변", "카페", "트레킹"], "오름과 해안도로, 현무암 풍경이 어우러진 국내 대표 섬 여행지입니다."],
  ["udo", "우도", "제주", "휴양", "여객선", true, "반나절~1일", "봄, 가을", ["자전거", "검멀레", "땅콩", "해변"], "제주 동쪽에서 짧고 선명한 바다 여행을 즐기기 좋은 작은 섬입니다."],
  ["marado", "마라도", "제주", "자연", "여객선", true, "반나절", "봄, 가을", ["국토최남단", "등대", "해안절벽", "짜장면"], "국토 최남단 상징성과 탁 트인 해안 산책로가 매력적인 섬입니다."],
  ["gapado", "가파도", "제주", "힐링", "여객선", true, "반나절~1일", "봄", ["청보리", "자전거", "올레길", "평지"], "청보리와 낮은 돌담길이 인상적인 느린 여행형 섬입니다."],
  ["biyangdo", "비양도", "제주", "힐링", "여객선", true, "반나절", "봄, 여름", ["분화구", "등대", "낚시", "산책"], "한림 앞바다의 작은 화산섬으로 조용한 산책과 낚시에 좋습니다."],
  ["chujado", "추자도", "제주", "액티비티", "여객선", true, "1박 2일", "가을", ["낚시", "올레길", "참굴비", "해안길"], "제주와 남해 사이의 거친 바다 풍경과 낚시 명소로 알려진 섬입니다."],
  ["ulleung", "울릉도", "경북", "자연", "여객선", true, "2박 3일", "여름, 가을", ["화산섬", "성인봉", "해안절벽", "독도"], "깊은 바다색과 절벽 지형이 강렬한 동해의 화산섬입니다."],
  ["dokdo", "독도", "경북", "역사", "여객선", true, "당일", "여름, 가을", ["영토", "동도", "서도", "해양생태"], "상징성과 해양 생태 가치가 큰 대한민국 동쪽 끝 섬입니다."],
  ["geoje", "거제도", "경남", "가족", "차량", false, "1박 2일", "봄, 여름", ["드라이브", "해금강", "몽돌해변", "가족여행"], "차량 접근성이 좋아 가족 단위 여행에 적합한 남해권 섬입니다."],
  ["oedo", "외도", "경남", "휴양", "여객선", true, "반나절", "봄, 여름", ["보타니아", "정원", "유람선", "해금강"], "해상 정원과 유람선 코스로 거제 여행에서 많이 찾는 섬입니다."],
  ["hansando", "한산도", "경남", "역사", "여객선", true, "당일", "봄, 가을", ["이순신", "제승당", "한산대첩", "통영"], "한산대첩의 역사와 잔잔한 통영 바다를 함께 만나는 섬입니다."],
  ["maemuldo", "매물도", "경남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["등대섬", "해품길", "전망", "통영"], "등대섬과 해안 트레킹으로 유명한 통영의 대표 섬입니다."],
  ["saryangdo", "사량도", "경남", "액티비티", "여객선", true, "당일~1박", "봄, 가을", ["등산", "지리산", "능선", "통영"], "바다 위 능선 산행으로 잘 알려진 통영권 액티비티 섬입니다."],
  ["yokjido", "욕지도", "경남", "휴양", "여객선", true, "1박 2일", "봄, 여름", ["모노레일", "고등어", "해안도로", "낚시"], "먹거리와 해안 전망, 낚시 여행이 잘 어울리는 통영의 큰 섬입니다."],
  ["bijindo", "비진도", "경남", "휴양", "여객선", true, "1박 2일", "여름", ["해수욕장", "섬허리", "스노클링", "통영"], "두 바다를 잇는 독특한 해변 지형으로 여름에 인기 있는 섬입니다."],
  ["somaemuldo", "소매물도", "경남", "자연", "여객선", true, "당일~1박", "봄, 가을", ["등대섬", "바닷길", "사진", "통영"], "물때에 따라 열리는 바닷길과 등대섬 풍경이 인상적입니다."],
  ["namhae", "남해도", "경남", "가족", "차량", false, "1박 2일", "봄, 가을", ["독일마을", "다랭이마을", "드라이브", "바다전망"], "드라이브와 마을 여행, 바다 전망 숙소를 함께 즐기기 좋은 섬입니다."],
  ["ganghwa", "강화도", "인천", "역사", "차량", false, "당일~1박", "봄, 가을", ["역사", "갯벌", "전등사", "카페"], "수도권에서 가깝고 역사 유적과 갯벌 풍경을 함께 즐길 수 있습니다."],
  ["gyodongdo", "교동도", "인천", "역사", "차량", false, "당일", "봄, 가을", ["대룡시장", "평화", "레트로", "강화"], "대룡시장과 접경 지역 특유의 분위기로 당일 여행에 좋습니다."],
  ["baengnyeong", "백령도", "인천", "자연", "여객선", true, "2박 3일", "여름, 가을", ["두무진", "사곶해변", "지질", "서해"], "서해 최북단 특유의 지질 풍경과 넓은 해변이 매력적인 섬입니다."],
  ["daecheongdo", "대청도", "인천", "자연", "여객선", true, "1박 2일", "여름, 가을", ["모래사막", "농여해변", "트레킹", "서해"], "모래언덕과 해변 트레킹이 돋보이는 서해 원거리 섬입니다."],
  ["deokjeokdo", "덕적도", "인천", "휴양", "여객선", true, "1박 2일", "여름", ["서포리", "해수욕장", "백패킹", "숲길"], "수도권에서 배로 떠나는 해수욕과 캠핑형 여행지로 인기가 높습니다."],
  ["muuido", "무의도", "인천", "가족", "차량", false, "당일", "봄, 여름", ["하나개", "실미도", "트레킹", "영종도"], "차량 접근이 편하고 해변과 산책로를 함께 즐길 수 있는 섬입니다."],
  ["seungbongdo", "승봉도", "인천", "힐링", "여객선", true, "1박 2일", "여름", ["이일레해변", "조용한섬", "캠핑", "산책"], "붐비지 않는 서해 섬 휴식을 찾는 여행자에게 잘 맞습니다."],
  ["anmyeondo", "안면도", "충남", "가족", "차량", false, "1박 2일", "봄, 가을", ["꽃지해변", "소나무숲", "일몰", "가족여행"], "해변과 휴양림, 일몰 명소가 모여 있는 충남 대표 섬입니다."],
  ["oeyeondo", "외연도", "충남", "자연", "여객선", true, "1박 2일", "봄, 여름", ["상록수림", "원거리섬", "낚시", "트레킹"], "먼 바다의 고요함과 상록수림이 매력적인 보령의 섬입니다."],
  ["seonyudo", "선유도", "전북", "휴양", "차량", false, "당일~1박", "봄, 여름", ["고군산군도", "해수욕장", "자전거", "드라이브"], "고군산군도 여행의 중심지로 해변과 드라이브 동선이 좋습니다."],
  ["munyeodo", "무녀도", "전북", "힐링", "차량", false, "당일", "봄, 가을", ["고군산군도", "갯벌", "마을길", "낙조"], "선유도와 함께 묶어 걷기 좋은 조용한 고군산군도 섬입니다."],
  ["jangjado", "장자도", "전북", "휴양", "차량", false, "당일", "여름", ["대장봉", "전망", "고군산", "해변"], "대장봉 전망과 작은 항구 풍경이 선명한 군산권 섬입니다."],
  ["jindo", "진도", "전남", "역사", "차량", false, "1박 2일", "봄, 가을", ["신비의바닷길", "운림산방", "명량", "남도문화"], "바닷길 축제와 남도 문화, 역사 여행을 함께 즐길 수 있습니다."],
  ["wando", "완도", "전남", "가족", "차량", false, "1박 2일", "봄, 여름", ["청정바다", "해조류", "타워", "가족여행"], "청정 해산물과 섬 연계 여행의 출발점으로 좋은 남해 섬입니다."],
  ["cheongsando", "청산도", "전남", "힐링", "여객선", true, "1박 2일", "봄", ["슬로길", "유채", "돌담", "걷기"], "느린 걸음으로 돌담길과 바다, 계절 꽃을 즐기기 좋은 섬입니다."],
  ["bogildo", "보길도", "전남", "역사", "여객선", true, "1박 2일", "봄, 가을", ["윤선도", "세연정", "정원", "문학"], "고산 윤선도의 흔적과 남해 섬 정취가 어우러진 섬입니다."],
  ["hongdo", "홍도", "전남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["유람선", "기암절벽", "사진", "다도해"], "붉은 암벽과 다도해 풍경이 인상적인 해상 경관 중심 여행지입니다."],
  ["heuksando", "흑산도", "전남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["흑산홍어", "상라산", "해안도로", "다도해"], "깊은 바다와 굽이진 해안도로, 섬 먹거리로 이름난 섬입니다."],
  ["gageodo", "가거도", "전남", "자연", "여객선", true, "2박 3일", "봄, 가을", ["국토최서남단", "원시림", "낚시", "절벽"], "먼 거리만큼 강렬한 원시 자연과 낚시 명소를 품은 섬입니다."],
  ["gwanmaedo", "관매도", "전남", "힐링", "여객선", true, "1박 2일", "봄, 여름", ["관매8경", "솔숲", "해변", "다도해"], "솔숲과 긴 해변, 관매8경으로 조용한 휴식을 주는 섬입니다."],
  ["geumodo", "금오도", "전남", "액티비티", "여객선", true, "1박 2일", "봄, 가을", ["비렁길", "여수", "절벽길", "섬박람회"], "여수 비렁길로 유명하며 2026여수세계섬박람회 핵심 연계 섬입니다.", true],
  ["gaedo", "개도", "전남", "힐링", "여객선", true, "당일~1박", "봄, 가을", ["여수", "사람길", "마을여행", "섬박람회"], "여수 섬박람회 부행사장 권역으로 마을길과 바다 풍경이 좋습니다.", true],
  ["geomundo", "거문도", "전남", "역사", "여객선", true, "1박 2일", "봄, 가을", ["등대", "근대사", "백도", "섬박람회"], "등대와 근대사, 백도 유람 코스로 알려진 여수의 대표 원거리 섬입니다.", true],
  ["nangdo", "낭도", "전남", "힐링", "차량/도보", false, "당일", "봄, 가을", ["여수", "둘레길", "막걸리", "섬박람회"], "다리로 연결되어 접근이 편하고 둘레길과 마을 분위기가 좋은 섬입니다.", true],
  ["sado", "사도", "전남", "자연", "여객선", true, "당일", "봄, 여름", ["공룡화석", "바닷길", "여수", "섬박람회"], "공룡 발자국 화석과 바닷길 체험으로 잘 알려진 여수 섬입니다.", true],
  ["ando", "안도", "전남", "휴양", "차량/여객선", true, "당일~1박", "봄, 여름", ["안도해수욕장", "기러기길", "어촌체험", "섬박람회"], "해수욕장과 기러기길 탐방, 어촌체험을 함께 즐기기 좋은 여수 섬입니다.", true],
  ["baekdo", "백도", "전남", "자연", "유람선", true, "당일", "봄, 가을", ["백도유람", "기암절경", "거문도", "섬박람회"], "거문도와 함께 찾는 해상 경관 명소로 기암절경 유람이 핵심인 섬입니다.", true],
  ["jobaldo", "조발도", "전남", "힐링", "차량", false, "당일", "봄, 가을", ["해오름언덕", "더섬힐링센터", "백리섬섬길", "섬박람회"], "연륙교로 접근성이 좋고 해오름언덕과 힐링센터를 중심으로 쉬어가기 좋은 섬입니다.", true],
  ["hahwado", "하화도", "전남", "힐링", "여객선", true, "당일", "봄", ["꽃섬길", "출렁다리", "여수", "섬박람회"], "꽃섬길과 바다 조망 산책로로 봄 여행 만족도가 높은 섬입니다.", true],
  ["sonjukdo", "손죽도", "전남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["원거리섬", "해안", "여수", "섬박람회"], "여수의 원거리 섬으로 한적한 바다와 어촌 분위기가 살아 있습니다.", true],
  ["yeondo", "연도", "전남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["소리도", "등대", "여수", "섬박람회"], "소리도라고도 불리며 등대와 남해 바다 전망이 매력적인 여수 섬입니다.", true],
  ["chodo", "초도", "전남", "자연", "여객선", true, "1박 2일", "봄, 가을", ["여수", "원거리섬", "낚시", "섬박람회"], "여수 원거리 섬 여행과 낚시, 조용한 체류에 어울리는 섬입니다.", true],
  ["jebu", "제부도", "경기", "가족", "차량", false, "당일", "봄, 가을", ["바닷길", "서해랑", "일몰", "갯벌"], "물때에 따라 열리는 바닷길과 일몰로 수도권 여행자에게 인기입니다."]
];

const yeosuScores = {
  금오도: { congestion: 6, activity: 9, accessibility: 7, nature: 10, convenience: 9 },
  안도: { congestion: 4, activity: 8, accessibility: 6, nature: 9, convenience: 6 },
  연도: { congestion: 2, activity: 6, accessibility: 3, nature: 10, convenience: 3 },
  초도: { congestion: 1, activity: 5, accessibility: 2, nature: 10, convenience: 2 },
  거문도: { congestion: 5, activity: 8, accessibility: 4, nature: 10, convenience: 7 },
  백도: { congestion: 1, activity: 4, accessibility: 1, nature: 10, convenience: 1 },
  낭도: { congestion: 8, activity: 6, accessibility: 10, nature: 7, convenience: 9 },
  조발도: { congestion: 7, activity: 5, accessibility: 10, nature: 6, convenience: 8 },
  개도: { congestion: 4, activity: 7, accessibility: 5, nature: 9, convenience: 5 },
  사도: { congestion: 5, activity: 7, accessibility: 7, nature: 9, convenience: 6 },
  하화도: { congestion: 3, activity: 6, accessibility: 6, nature: 9, convenience: 4 },
  손죽도: { congestion: 1, activity: 5, accessibility: 2, nature: 9, convenience: 2 }
};

const yeosuDetails = {
  금오도: {
    summary: "비렁길 1~5코스와 절벽 전망, 방풍나물·볼락 같은 섬 먹거리, 2026년 박람회 체험 프로그램까지 갖춘 여수 대표 트레킹 섬입니다.",
    aiDescription:
      "금오도는 여수 섬 여행 중 가장 완성도 높은 걷기 여행지로 잡기 좋습니다. 여수시 관광 안내는 비렁길을 함구미에서 장지까지 이어지는 1~5코스로 소개하며, 미역널방, 신선대, 촛대바위, 매봉전망대, 출렁다리처럼 코스마다 다른 절벽 조망을 제공합니다. 숙박과 음식점 기반도 여수권 섬 중 비교적 탄탄해 1박 2일 트레킹 일정에 적합하고, CSV 점수에서도 자연경관 10점·액티비티 9점·편의성 9점으로 균형이 좋습니다. 2026여수세계섬박람회 기간에는 비렁길 파밍 트레킹, 썸 스팟 투어, 바다캠핑, 힐링&웰니스 같은 체험형 프로그램과 연결해 섬을 더 입체적으로 경험하기 좋습니다."
  },
  안도: {
    summary: "안도해수욕장, 이야포해수욕장, 상산봉수대와 기러기길 탐방로가 있는 조용한 체류형 여수 섬입니다.",
    aiDescription:
      "안도는 해수욕과 마을 산책, 어촌 체험을 한 번에 묶기 좋은 섬입니다. 여수시 관광 안내에는 안도해수욕장, 이야포해수욕장, 상산봉수대, 안도 어촌체험마을, 기러기길 탐방로가 주요 요소로 정리되어 있습니다. 전복과 양식수산물, 해초무침, 톳나물 같은 섬 먹거리도 잘 어울리고, 서고지와 동고지 주변은 낚시 포인트로도 언급됩니다. CSV 기준 자연경관 9점·액티비티 8점이라 금오도보다 한결 조용하지만 활동성은 충분한 편입니다."
  },
  연도: {
    summary: "소리도등대, 덕포몽돌해변, 동백나무 터널과 남부길 탐방로가 이어지는 자연 조망 중심의 원거리 섬입니다.",
    aiDescription:
      "연도는 멀리 들어간 만큼 풍경의 밀도가 높은 섬입니다. 여수시 관광 안내는 연도남부길탐방로, 덕포명품마을 마실길, 연도일주코스를 제시하며 덕포몽돌해변, 대룡단, 소룡단, 동백나무 터널, 소리도 등대를 주요 관광지로 소개합니다. CSV에서는 자연경관이 10점이지만 접근성 3점·편의성 3점이라 일정은 넉넉하게 잡는 편이 좋습니다. 빠른 관광보다 등대와 몽돌해변, 생태습지를 차분히 걷는 1박 2일 코스에 잘 맞습니다."
  },
  초도: {
    summary: "상산봉, 정강해수욕장, 모자바위와 해양생태체험이 있는 한적한 원거리 자연 섬입니다.",
    aiDescription:
      "초도는 활성도가 낮고 자연경관 점수가 높은 조용한 섬 여행지입니다. 여수시 관광 안내는 상산봉, 정강해수욕장, 모자바위를 주요 관광 요소로 들고, 전복·돌김·미역 등 해산물과 물때에 따라 운영되는 해양생태체험장을 소개합니다. CSV 기준 활성도 1점·자연경관 10점으로 붐비지 않는 자연 체류에 강하지만 접근성 2점·편의성 2점이므로 배편, 식사, 숙박을 사전에 확인하는 일정 설계가 중요합니다."
  },
  거문도: {
    summary: "거문도등대, 동백터널숲, 녹산등대, 인어해양공원과 백도 유람을 연결하는 여수 원거리 섬 여행의 중심지입니다.",
    aiDescription:
      "거문도는 역사와 해상 경관, 등대 트레킹을 함께 담을 수 있는 여수의 대표 원거리 섬입니다. 여수시 관광 안내에는 녹산등대, 인어해양공원, 거문도등대, 동백터널숲, 귤은당, 거문대교, 거문도 역사공원이 주요 관광지로 정리되어 있고, 백도 유람과 거문도등대를 묶는 4~5시간 코스가 제안됩니다. CSV 기준 자연경관 10점·액티비티 8점·편의성 7점으로 원거리 섬치고 체험과 기반이 탄탄한 편입니다. 다만 접근성은 4점이므로 기상과 배편 변수를 고려해 여유 일정이 좋습니다."
  },
  백도: {
    summary: "거문도와 함께 유람으로 만나는 기암절경 중심의 해상 경관 섬입니다.",
    aiDescription:
      "백도는 체류형 섬이라기보다 거문도 여행과 함께 유람선으로 감상하는 해상 경관 목적지에 가깝습니다. 여수시 관광 안내의 거문도 코스는 백도 유람을 거문도여객선터미널, 삼호교, 동백터널숲, 거문도등대와 함께 묶어 소개합니다. CSV 기준 자연경관은 10점으로 최고지만 접근성·편의성은 각각 1점이라, 단독 여행지보다 거문도 일정 속 핵심 하이라이트로 배치하는 편이 현실적입니다."
  },
  낭도: {
    summary: "연륙교로 접근성이 뛰어나고 둘레길, 어촌체험, 낭도막걸리, 야영장까지 즐길 수 있는 여수 섬입니다.",
    aiDescription:
      "낭도는 CSV에서 접근성 10점·편의성 9점으로 여수 섬박람회 12개 섬 중 가장 가볍게 접근하기 좋은 축에 속합니다. 여수시 관광 안내는 낭도둘레길 1~3길, 낭도 탐방로, 어촌체험휴양마을과 야영장 체험, 낚시 체험을 주요 요소로 소개합니다. 특산물로는 낭도 막걸리가 언급되어 걷기와 로컬 먹거리를 함께 즐기기 좋습니다. 연륙교 이후 관광객 추정치가 높은 편이라 주말에는 여유 있는 출발이 좋습니다."
  },
  조발도: {
    summary: "해오름언덕 공원과 더섬힐링센터, 백리섬섬길 조망을 즐기는 접근성 좋은 여수 섬입니다.",
    aiDescription:
      "조발도는 CSV 기준 접근성 10점·편의성 8점으로 차량 이동형 섬 여행에 적합합니다. 여수시 관광 안내는 해오름언덕 공원과 더섬힐링센터를 주요 관광지로 제시하고, 여수 섬섬길 조성사업을 통해 스카이워크와 경관쉼터 등이 조성되는 권역으로 소개합니다. 자연경관 점수는 6점으로 원거리 비경형 섬보다는 브리지 코스 중간에 쉬어가며 전망을 즐기는 목적지가 더 잘 맞습니다."
  },
  개도: {
    summary: "개도사람길, 모전몽돌해변, 청석포해변, 개도막걸리와 박람회 캠핑·트레킹 콘텐츠가 있는 체험형 섬입니다.",
    aiDescription:
      "개도는 걷기, 해변, 로컬 먹거리를 균형 있게 담기 좋은 여수 섬입니다. 여수시 관광 안내는 개도사람길 1~3코스를 화산선착장, 호령마을, 배성금, 정목으로 이어 소개하고, 모전몽돌해변·청석포해변·마녀목을 주요 관광지로 제시합니다. 전복, 문어, 개도막걸리도 특산물로 언급됩니다. 2026여수세계섬박람회 기간에는 섬섬캠핑, 썸 스팟 투어, 개도 트레킹, 힐링&웰니스, 섬 문화트럭 같은 프로그램이 예정되어 있어 단순 방문보다 체험형 일정으로 확장하기 좋습니다."
  },
  사도: {
    summary: "공룡화석지, 거북바위, 얼굴바위, 바닷길과 둘레길을 함께 즐기는 지질·자연 체험 섬입니다.",
    aiDescription:
      "사도는 지질 여행과 바닷길 체험을 결합하기 좋은 섬입니다. 여수시 관광 안내는 사도둘레길을 사도선착장, 공룡화석지, 거북바위, 용미암으로 이어지는 길과 사도해수욕장, 해안산책로, 공룡화석공원을 잇는 길로 소개합니다. 음력 정월대보름과 2월·4월 말 등 연간 5~6차례 바닷길이 열리는 점도 특징입니다. 공룡과 익룡 발자국은 천연기념물로 지정되어 있어 아이 동반 가족이나 자연사에 관심 있는 여행자에게 특히 잘 맞습니다."
  },
  하화도: {
    summary: "꽃섬길, 구절초공원, 큰산전망대, 꽃섬다리로 이어지는 봄철 산책형 여수 섬입니다.",
    aiDescription:
      "하화도는 이름처럼 꽃과 전망을 따라 걷는 섬입니다. 여수시 관광 안내는 하화도 꽃섬길을 선착장에서 구절초공원, 큰산전망대, 깻넘전망대, 꽃섬다리, 애림민야생화공원으로 이어지는 약 6km·3시간 코스로 제시합니다. 부추와 문어가 특산물로 언급되고, 숙박과 음식점도 소규모로 운영됩니다. CSV 기준 자연경관 9점·활성도 3점이라 붐비는 관광지보다 산책과 사진, 조용한 봄 여행에 강합니다."
  },
  손죽도: {
    summary: "마제봉, 봉화산, 깃대봉, 삼각산과 손죽해수욕장을 잇는 원거리 트레킹 섬입니다.",
    aiDescription:
      "손죽도는 여수 원거리 섬 중에서도 고요한 산길과 해변을 찾는 여행자에게 맞습니다. 여수시 관광 안내는 선착장에서 마제봉, 봉화산, 깃대봉, 삼각산으로 이어지는 등산코스와 손죽해수욕장, 몽돌해수욕장, 갯가길을 잇는 탐방코스를 소개합니다. 이대원장군 사당, 깃대봉, 삼각산, 손죽해수욕장도 주요 관광지로 제시됩니다. CSV 기준 활성도 1점·자연경관 9점인 대신 접근성 2점·편의성 2점이므로 숙박과 배편을 먼저 확정하는 느린 여행이 좋습니다."
  }
};

export const islands = rawIslands.map(
  ([id, name, region, type, access, ferry, stay, bestSeason, keywords, summary, expo2026 = false]) => {
    const score = yeosuScores[name] ?? null;
    const detail = yeosuDetails[name] ?? null;

    return {
    id,
    name,
    region,
    type,
    access,
    ferry,
    stay,
    bestSeason,
    keywords,
    image: imageByIsland[name] ?? imageByType[type],
    location: coordinatesByIsland[name],
    summary: detail?.summary ?? summary,
    expo2026: Boolean(score) || expo2026,
    scores: score,
    aiDescription: detail?.aiDescription ?? `${name}는 ${summary} ${bestSeason}에 특히 여행 만족도가 높고, ${keywords
      .slice(0, 3)
      .join(", ")} 같은 키워드로 일정을 구성하기 좋습니다. 이동 방식은 ${access}이며 권장 체류는 ${stay}입니다. ${
      Boolean(score) || expo2026
        ? "2026여수세계섬박람회와 연계해 주목도가 높은 여수권 섬이므로 박람회 일정과 함께 묶어 방문하기 좋습니다."
        : "처음 방문한다면 대표 명소 한두 곳에 집중하고, 날씨와 배편 또는 교통 시간을 여유 있게 잡는 코스를 추천합니다."
    }`
  };
  }
).sort((a, b) => a.name.localeCompare(b.name, "ko"));

const sortedRegions = [...new Set(islands.map((island) => island.region))].sort((a, b) => a.localeCompare(b, "ko"));
const sortedStays = [...new Set(islands.map((island) => island.stay))].sort((a, b) => a.localeCompare(b, "ko"));
const sortedSeasons = [
  ...new Set(islands.flatMap((island) => island.bestSeason.split(",").map((season) => season.trim())))
].sort((a, b) => a.localeCompare(b, "ko"));

export const regions = ["전체", ...sortedRegions];
export const types = ["전체", ...new Set(islands.map((island) => island.type))];
export const accesses = ["전체", "차량", "도보", "여객선", "유람선", "항공"];
export const stays = ["전체", ...sortedStays];
export const seasons = ["전체", ...sortedSeasons];
