document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-row');
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderCards(data);
        })
        .catch(error => console.error('Error loading articles:', error));

    function renderCards(articles) {
        cardContainer.innerHTML = articles.map(article => `
           <div class="md:col-span-1">
  <div class="bg-white rounded-[20px] overflow-hidden h-full">

    <!-- Image Wrapper -->
    <div class="relative h-[200px]">

      <img src="${article.image}" alt="${article.overlayTitle}" 
           class="w-full h-full object-cover">

      <!-- Badge -->
      <span class="absolute top-[15px] left-[15px] bg-[#C9A227] text-white px-[15px] py-[5px] rounded-[45px] text-sm font-bold">
        ${article.category}
      </span>

      <!-- Overlay -->
      
    </div>
    <div class="p-[15px] text-[#333]">

      <h5 class="font-bold text-[25px] leading-[1.3] text-[#1F2A44] min-h-[101px]">
        ${article.mainTitle}
      </h5>

     <p class="text-[14px] leading-[24px] text-[#333333] font-normal mb-[10px]">
  ${article.excerpt}
</p>

      <a href="#" class="text-[#C9A227] mb-[10px] underline font-semibold text-base cursor-pointer">
        Read More
      </a>

    </div>

  </div>
</div>
        `).join('');
    }
});
function loadComponent(id, file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(id).innerHTML = data;
                })
                .catch(error => console.error('Error loading component:', error));
        }
loadComponent('header-placeholder', 'header.html');
loadComponent('banner-placeholder', 'banner.html');