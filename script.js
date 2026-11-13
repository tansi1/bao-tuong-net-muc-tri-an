const stories=[{title:'Người gieo những mùa xanh',text:['Có những hạt giống lớn lên từ đất, cũng có những ước mơ lớn lên từ lời động viên của thầy cô. Trong những ngày còn bỡ ngỡ dưới mái trường, chúng em được thầy cô kiên nhẫn chỉ bảo, sửa từng lỗi nhỏ và mỉm cười trước mỗi tiến bộ.','Có những tiết học không chỉ dừng ở sách vở. Đó còn là bài học về lòng tử tế, sự trung thực, tinh thần đoàn kết và nghị lực khi gặp khó khăn. Mỗi ngày đến lớp, chúng em mang về thêm một điều đáng quý.','Nhân ngày 20/11, chúng em xin cảm ơn những người lặng lẽ gieo mùa xanh tri thức. Chúng em sẽ cố gắng học tập và trưởng thành để xứng đáng với tình yêu thương ấy.']},{title:'Một thời áo trắng',text:['Tiếng trống trường vang lên, sân trường lại rộn rã những bước chân và câu chuyện không đầu không cuối. Có khi chỉ là một buổi kiểm tra, một lần chuẩn bị văn nghệ hay một buổi trực nhật, nhưng tất cả dần trở thành ký ức không thể thay thế.','Chúng em nhớ những ánh mắt khích lệ khi gặp bài khó, những lời nhắc nhở nghiêm khắc mà ấm áp, nhớ cả khoảng sân đầy nắng sau giờ học. Mái trường THCS Bình Lợi lưu giữ biết bao hành trình lớn lên như thế.','Rồi một ngày, chúng em sẽ rời xa lớp học quen thuộc. Nhưng hình ảnh thầy cô và bạn bè sẽ vẫn ở đó, nguyên vẹn như trang lưu bút tuổi học trò.']},{title:'Điều em chưa kịp nói',text:['Kính gửi thầy cô!','Có những lời cảm ơn thật giản dị nhưng chúng em lại ngại ngùng chưa kịp nói. Cảm ơn vì thầy cô luôn tin tưởng ngay cả khi chúng em chưa đủ tự tin. Cảm ơn vì những lần nhắc nhở và cả những lời khen đúng lúc.','Ngày 20/11, chúng em không có món quà nào quý hơn sự cố gắng mỗi ngày. Mong thầy cô luôn mạnh khỏe, vui vẻ và hạnh phúc. Chúng em yêu quý thầy cô rất nhiều!']}];
const modal=document.getElementById('modal');document.querySelectorAll('[data-story]').forEach(b=>b.addEventListener('click',()=>{const s=stories[+b.dataset.story];document.getElementById('storyTitle').textContent=s.title;document.getElementById('storyContent').innerHTML='';s.text.forEach(p=>{let e=document.createElement('p');e.textContent=p;document.getElementById('storyContent').appendChild(e)});modal.classList.add('show')}));function closeModal(){modal.classList.remove('show')}document.getElementById('closeModal').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});document.getElementById('menuBtn').onclick=()=>document.getElementById('menu').classList.toggle('open');document.querySelectorAll('.navlinks a').forEach(a=>a.onclick=()=>document.getElementById('menu').classList.remove('open'));
const seed=[{name:'Tập thể học sinh lớp 6/1',message:'Kính chúc quý thầy cô luôn mạnh khỏe, hạnh phúc và tràn đầy nhiệt huyết với nghề! 🌷'},{name:'Góc học trò',message:'Cảm ơn thầy cô vì đã luôn kiên nhẫn, yêu thương và đồng hành cùng chúng em. Chúc mừng 20/11! 💛'}];let wishes=[];try{wishes=JSON.parse(localStorage.getItem('binhloi-wishes')||'[]');if(!Array.isArray(wishes))wishes=[]}catch(e){wishes=[]}function renderWishes(){let wall=document.getElementById('wishWall');wall.innerHTML='';[...wishes,...seed].forEach(w=>{let box=document.createElement('div');box.className='wish';let p=document.createElement('p'),name=document.createElement('b');p.textContent='“'+w.message+'”';name.textContent='— '+w.name;box.append(p,name);wall.appendChild(box)})}renderWishes();let toastTimeout;function toast(t){const el=document.getElementById('toast');el.textContent=t;el.style.display='block';clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.style.display='none',3000)}document.getElementById('wishForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),message=document.getElementById('message').value.trim();if(!name||!message)return;wishes.unshift({name,message});try{localStorage.setItem('binhloi-wishes',JSON.stringify(wishes))}catch(e){}renderWishes();e.target.reset();toast('Đã gắn lời chúc vào báo tường trên thiết bị này!')});document.getElementById('exportWishes').onclick=()=>{const content=[...wishes,...seed].map((w,i)=>(i+1)+'. '+w.name+'\n'+w.message).join('\n\n');const url=URL.createObjectURL(new Blob(['\ufeff'+content],{type:'text/plain;charset=utf-8'}));let a=document.createElement('a');a.href=url;a.download='loi-chuc-20-11-binh-loi.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};

// ===== SLIDESHOW HINH ANH =====


// ===== SLIDESHOW NHIEU HINH ANH =====

// THEM ANH TAI DAY
const slideImages = [
  "pic/1.jpg",
  "pic/4.jpg",
  "pic/8.jpg",
  "pic/20.jpg",
  "pic/25.jpg",
  "pic/26.jpg"
];

// Lay cac thanh phan
const slideshow = document.getElementById("schoolSlideshow");

if (slideshow && slideImages.length > 0) {
  const wrapper = document.getElementById("slidesWrapper");
  const dotsContainer = document.getElementById("slideDots");
  const prevBtn = slideshow.querySelector(".slide-prev");
  const nextBtn = slideshow.querySelector(".slide-next");

  // Tao anh va cham dieu huong tu dong
  slideImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (index === 0) slide.classList.add("active");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Kỷ niệm THCS Bình Lợi - Ảnh " + (index + 1);
    img.loading = index === 0 ? "eager" : "lazy";

    slide.appendChild(img);
    wrapper.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot";
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", "Ảnh " + (index + 1));

    dotsContainer.appendChild(dot);
  });

  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow.querySelectorAll(".dot");

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function startSlideshow() {
    clearInterval(slideInterval);

    if (slides.length > 1) {
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 4500);
    }
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlideshow();
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlideshow();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideshow();
    });
  });

  if (slides.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    dotsContainer.style.display = "none";
  }

  startSlideshow();
}


// ======================================
// POPUP ALBUM - LẤY ẢNH TỪ INDEX.HTML
// ======================================

const albumModal = document.getElementById("albumModal");
const albumPhotos = document.getElementById("albumPhotos");
const albumTitle = document.getElementById("albumTitle");
const albumCount = document.getElementById("albumCount");

const lightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");

let activeImages = [];
let activePhotoIndex = 0;

function openAlbum(key) {
  const gallery = document.querySelector(
    '#albumData [data-gallery="' + key + '"]'
  );

  if (!gallery) return;

  activeImages = Array.from(gallery.querySelectorAll("img")).map(img => ({
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt") || "Ảnh kỷ niệm"
  }));

  albumTitle.textContent = gallery.dataset.title;
  albumCount.textContent = activeImages.length + " hình ảnh";
  albumPhotos.innerHTML = "";

  activeImages.forEach((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";

    button.appendChild(img);
    button.addEventListener("click", () => openPhoto(index));
    albumPhotos.appendChild(button);
  });

  albumModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeAlbum() {
  albumModal.classList.remove("show");
  document.body.style.overflow = "";
}

function openPhoto(index) {
  activePhotoIndex = index;
  updatePhoto();
  lightbox.classList.add("show");
}

function updatePhoto() {
  if (!activeImages.length) return;

  lightboxImage.src = activeImages[activePhotoIndex].src;
  lightboxImage.alt = activeImages[activePhotoIndex].alt;

  lightboxCounter.textContent =
    (activePhotoIndex + 1) + " / " + activeImages.length;
}

function changePhoto(step) {
  if (!activeImages.length) return;

  activePhotoIndex =
    (activePhotoIndex + step + activeImages.length) % activeImages.length;

  updatePhoto();
}

function closePhoto() {
  lightbox.classList.remove("show");
}

document.querySelectorAll("[data-album]").forEach(card => {
  card.addEventListener("click", () => {
    openAlbum(card.dataset.album);
  });
});

document.getElementById("albumClose").onclick = closeAlbum;
document.getElementById("lightboxClose").onclick = closePhoto;

document.getElementById("lightboxPrev").onclick = () => changePhoto(-1);
document.getElementById("lightboxNext").onclick = () => changePhoto(1);

albumModal.addEventListener("click", e => {
  if (e.target === albumModal) closeAlbum();
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closePhoto();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (lightbox.classList.contains("show")) {
      closePhoto();
    } else if (albumModal.classList.contains("show")) {
      closeAlbum();
    }
  }

  if (lightbox.classList.contains("show")) {
    if (e.key === "ArrowRight") changePhoto(1);
    if (e.key === "ArrowLeft") changePhoto(-1);
  }
});

// ======================================
// HIỆU ỨNG PHÁO GIẤY KHI MỞ WEBSITE
// ======================================

(function () {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  // Tôn trọng thiết bị có cài đặt giảm chuyển động
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const colors = [
    "#d6a44a", // Vàng
    "#e59ca8", // Hồng
    "#6c9877", // Xanh lá
    "#ffffff", // Trắng
    "#c46f50"  // Cam đất
  ];

  let particles = [];
  let animationId;
  let startTime;

  const duration = 5000;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function createConfetti(side) {
    const fromLeft = side === "left";

    return {
      x: fromLeft ? 0 : canvas.width,
      y: canvas.height * 0.12,
      vx: (fromLeft ? 1 : -1) * (3 + Math.random() * 8),
      vy: -4 - Math.random() * 8,
      gravity: 0.12 + Math.random() * 0.06,
      size: 5 + Math.random() * 7,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1
    };
  }

  // Tạo pháo giấy từ hai bên
  const amount = window.innerWidth < 600 ? 70 : 140;

  for (let i = 0; i < amount; i++) {
    particles.push(createConfetti(i % 2 ? "left" : "right"));
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.995;
      p.rotation += p.rotationSpeed;

      if (elapsed > 3200) {
        p.opacity = Math.max(0, 1 - (elapsed - 3200) / 1800);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (elapsed < duration) {
      animationId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    }
  }

  requestAnimationFrame(animate);
})();
