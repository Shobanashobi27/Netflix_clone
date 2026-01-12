// Movie Data
const movies = {
    "trending": [
        {
            title: "Stranger Things",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPZtjzQdverRm37KEEPcMAKpuBMXGU-427A&s",
            year: "2016",
            rating: "8.7",
            genre: "Sci-Fi, Horror",
            seasons: "4",
            videoId: "b9EkMc79ZSU"
        },
        {
            title: "Dark",
            image: "https://i.pinimg.com/736x/25/df/97/25df9709fb84a878311bb45391706a11.jpg",
            year: "2017",
            rating: "8.8",
            genre: "Sci-Fi, Thriller",
            seasons: "3",
            videoId: "rrwycJ08PSA"
        },
        {
            title: "The Witcher",
            image: "https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-witcher-logo.png",
            year: "2019",
            rating: "8.2",
            genre: "Fantasy, Adventure",
            seasons: "3",
            videoId: "ndl1W4ltcmg"
        },
        {
            title: "Wednesday",
            image: "https://res.cloudinary.com/jerrick/image/upload/v1685645166/6478e76ead0f68001d405bab.jpg",
            year: "2022",
            rating: "8.2",
            genre: "Comedy, Fantasy",
            seasons: "1",
            videoId: "Di310WS8zLk"
        },
        {
            title: "Black Mirror",
            image: "https://wallpapers.com/images/featured/black-mirror-gbqux8n5pndwjdrn.jpg",
            year: "2011",
            rating: "8.8",
            genre: "Sci-Fi, Thriller",
            seasons: "6",
            videoId: "jDiYGjp5iFg"
        },
        {
            title: "The Queen's Gambit",
            image: "https://www.openingmaster.com/images/Kitchen/the-queens-gambit-openingmaster.jpeg",
            year: "2020",
            rating: "8.5",
            genre: "Drama",
            seasons: "1",
            videoId: "CDrieqwSdgI"
        },
        {
            title: "Money Heist",
            image: "https://i.cdn.newsbytesapp.com/images/l204_7841606834584.jpg",
            year: "2017",
            rating: "8.2",
            genre: "Crime, Drama",
            seasons: "5",
            videoId: "_InqQJRqGW4"
        },
        {
            title: "The Crown",
            image: "https://images.ctfassets.net/4cd45et68cgf/4B7Cpez55tyZO1XCuagDsi/9bc71b47d431f3d403c7f8419d9b235a/The_Crown-Story_Art-a6193eb0-7816-11ee-90d5-0e1d86e0feeb.jpg?w=2560",
            year: "2016",
            rating: "8.6",
            genre: "Drama, History",
            seasons: "5",
            videoId: "JWtnJjn6ng0"
        }
    ],
    "originals": [
        {
            title: "Narcos",
            image: "https://images4.alphacoders.com/118/1184497.jpg",
            year: "2015",
            rating: "8.8",
            genre: "Crime, Drama",
            seasons: "3",
            videoId: "U7elNhHwgBU"
        },
        {
            title: "Ozark",
            image: "https://e0.pxfuel.com/wallpapers/655/770/desktop-wallpaper-ozark-season-2-is-near-the-life-pile-ozark-netflix.jpg",
            year: "2017",
            rating: "8.4",
            genre: "Crime, Drama",
            seasons: "4",
            videoId: "5hAXVqrljbs"
        },
        {
            title: "The Umbrella Academy",
            image: "https://imageio.forbes.com/blogs-images/dbloom/files/2019/04/Umbrella-Academy-Netflix-image-1200x675.jpeg?format=jpg&height=900&width=1600&fit=bounds",
            year: "2019",
            rating: "8.0",
            genre: "Action, Fantasy",
            seasons: "3",
            videoId: "0DAmWHxeoKw"
        },
        {
            title: "Bridgerton",
            image: "https://ntvb.tmsimg.com/assets/p18974714_b_h10_ao.jpg?w=960&h=540",
            year: "2020",
            rating: "7.3",
            genre: "Drama, Romance",
            seasons: "2",
            videoId: "gpv7ayf_tyE"
        },
        {
            title: "Mindhunter",
            image: "https://resizing.flixster.com/_y_ITBzdLtH0a41qOpucXNBLl1Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14413981_b_h10_ab.jpg",
            year: "2017",
            rating: "8.6",
            genre: "Crime, Drama",
            seasons: "2",
            videoId: "ikbOBDsBd6k"
        },
        {
            title: "Russian Doll",
            image: "https://baylorlariat.com/wp-content/uploads/2022/04/p21789744_b_h8_aa-scaled.jpg",
            year: "2019",
            rating: "7.8",
            genre: "Comedy, Drama",
            seasons: "2",
            videoId: "ZQ1YU0Otz_8"
        },
        {
            title: "The Haunting of Hill House",
            image: "https://w0.peakpx.com/wallpaper/457/871/HD-wallpaper-tv-show-the-haunting-of-hill-house.jpg",
            year: "2018",
            rating: "8.6",
            genre: "Drama, Horror",
            seasons: "2",
            videoId: "3eqxXqJcKYQ"
        }
    ],
    "dark-fantasy": [
        {
            title: "American Horror Story",
            image: "https://reviewersunite.com/wp-content/uploads/2014/07/ahs0.jpg",
            year: "2011",
            rating: "8.0",
            genre: "Drama, Horror",
            seasons: "11",
            videoId: "s8zZq5XK100"
        },
        {
            title: "The Sandman",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dfat0k3-4c0838e5-1675-4ab7-ba97-a321ad78f4cc.jpg/v1/fill/w_1192,h_670,q_70,strp/the_sandman_live_wallpaper_for_pc_by_favorisxp_dfat0k3-pre.jpg",
            year: "2022",
            rating: "7.7",
            genre: "Drama, Fantasy",
            seasons: "1",
            videoId: "83ClbRPRDXU"
        },
        {
            title: "Locke & Key",
            image: "https://resizing.flixster.com/C6taPdMBLYIjyJIyFdbtSWSp8Bw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20665129_b_h8_aa.jpg",
            year: "2020",
            rating: "7.4",
            genre: "Drama, Fantasy",
            seasons: "3",
            videoId: "51Qx3hqX4kM"
        },
        {
            title: "The Midnight Club",
            image: "https://ntvb.tmsimg.com/assets/p22352973_b_h10_aa.jpg?w=960&h=540",
            year: "2022",
            rating: "6.6",
            genre: "Drama, Horror",
            seasons: "1",
            videoId: "b7VCHxMKhYQ"
        },
        {
            title: "From",
            image: "https://resizing.flixster.com/mQ1ZzDs4sG9BTQGI6sJfFTPjHzE=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21200256_b_h9_aa.jpg",
            year: "2022",
            rating: "7.7",
            genre: "Drama, Horror",
            seasons: "2",
            videoId: "wIY1k3y9p-Y"
        },
        {
            title: "Archive 81",
            image: "https://resizing.flixster.com/vPN73m4Fnv34LuwRcBCOtzFlk4M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21140888_b_h8_aa.jpg",
            year: "2022",
            rating: "7.3",
            genre: "Drama, Horror",
            seasons: "1",
            videoId: "Y2H4pFv4H8c"
        },
        {
            title: "The Walking Dead",
            image: "https://m.economictimes.com/thumb/msid-95774741,width-1200,height-900,resizemode-4,imgsize-49102/the-walking-dead-when-will-season-11-be-on-netflix-know-all-details-here.jpg",
            year: "2010",
            rating: "8.2",
            genre: "Drama, Horror",
            seasons: "11",
            videoId: "sfAc2U20uyg"
        }
    ],
    "top-rated": [
        {
            title: "Breaking Bad",
            image: "https://www.slashgear.com/img/gallery/netflix-brings-breaking-bad-in-4k/intro-import.jpg",
            year: "2008",
            rating: "9.5",
            genre: "Crime, Drama",
            seasons: "5",
            videoId: "HhesaQXLuRY"
        },
        {
            title: "Game of Thrones",
            image: "https://www.chip.de/ii/1/0/8/8/3/8/0/0/0/got2-61e142de224b58da.jpg",
            year: "2011",
            rating: "9.2",
            genre: "Action, Adventure",
            seasons: "8",
            videoId: "rlR4PJn8b8I"
        },
        {
            title: "The Last of Us",
            image: "https://gaming-cdn.com/images/products/13298/orig-fallback-v1/the-last-of-us-part-i-pc-game-steam-europe-cover.jpg?v=1694611488",
            year: "2023",
            rating: "8.9",
            genre: "Action, Drama",
            seasons: "1",
            videoId: "uLtkt8BonwM"
        },
        {
            title: "Better Call Saul",
            image: "https://w0.peakpx.com/wallpaper/458/229/HD-wallpaper-netflix-better-call-saul.jpg",
            year: "2015",
            rating: "8.9",
            genre: "Crime, Drama",
            seasons: "6",
            videoId: "HN4oydykJFc"
        },
        {
            title: "House of the Dragon",
            image: "https://images5.alphacoders.com/129/1294170.jpg",
            year: "2022",
            rating: "8.5",
            genre: "Action, Adventure",
            seasons: "1",
            videoId: "DotnJ7tTA34"
        },
        {
            title: "Chernobyl",
            image: "https://m.media-amazon.com/images/S/pv-target-images/797b77fc37ec3c334a1db261c2b1052e3992dbf1b3277afe7a975838e0df27c0.jpg",
            year: "2019",
            rating: "9.4",
            genre: "Drama, History",
            seasons: "1",
            videoId: "s9APLXM9Ei8"
        },
        {
            title: "Peaky Blinders",
            image: "https://adelhvbrooks539666414.wordpress.com/wp-content/uploads/2018/09/peaky-blinders-5277bdad6dba4.jpg",
            year: "2013",
            rating: "8.8",
            genre: "Crime, Drama",
            seasons: "6",
            videoId: "oVzVdvGIC7U"
        }
    ],
    "recent": [
        {
            title: "You",
            image: "https://cdn.wallpapersafari.com/76/10/XzEnw6.jpg",
            year: "2018",
            rating: "7.7",
            genre: "Crime, Drama",
            seasons: "4",
            videoId: "ga1m0wjzscU"
        },
        {
            title: "Outer Banks",
            image: "https://4kwallpapers.com/images/wallpapers/outer-banks-netflix-2560x1440-19806.jpg",
            year: "2020",
            rating: "7.6",
            genre: "Action, Adventure",
            seasons: "3",
            videoId: "uk_mUZqaC9U"
        },
        {
            title: "All of Us Are Dead",
            image: "https://sm.ign.com/ign_in/screenshot/default/all-of-us-are-dead_th9y.jpg",
            year: "2022",
            rating: "7.5",
            genre: "Action, Horror",
            seasons: "1",
            videoId: "IN5TD4VRcSM"
        },
        {
            title: "Squid Game",
            image: "https://wallpapercat.com/w/full/0/c/f/46439-1920x1080-desktop-1080p-squid-game-background.jpg",
            year: "2021",
            rating: "8.0",
            genre: "Action, Drama",
            seasons: "1",
            videoId: "oqxAJKy0ii4"
        },
        {
            title: "Emily in Paris",
            image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQeH-S5wj2xm-pnMcBnP4zmgpI15Zr7j8RHtFklNXxtngV8hKOe_6sJAH95X2zN1X29djim3OotdkVDf1DFz2vJ-JJyllUQhzBwy0vZ1SMads_w5qba3z97mWrGwdJvheXDYJVLtRAh5UTOoMidRr8gwK9x4.jpg?r=ae2",
            year: "2020",
            rating: "6.9",
            genre: "Comedy, Drama",
            seasons: "3",
            videoId: "Q-Xx7rUX1R8"
        },
        {
            title: "The Lincoln Lawyer",
            image: "https://cdn.technadu.com/wp-content/uploads/2024/10/The-Lincoln-Lawyer.jpg",
            year: "2022",
            rating: "7.6",
            genre: "Crime, Drama",
            seasons: "2",
            videoId: "pBzODK_4s-A"
        },
        {
            title: "Shadow and Bone",
            image: "https://wallpapercat.com/w/full/7/2/c/14581-1920x1080-desktop-full-hd-shadow-and-bone-wallpaper-photo.jpg",
            year: "2021",
            rating: "7.6",
            genre: "Action, Adventure",
            seasons: "2",
            videoId: "b1WHQTbJ7vE"
        }
    ]
};

// Hero background images
const heroBackgrounds = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bb0dd0f-3a24-48e3-83a5-b476ca307a1f/dkto0er-a33087cc-c503-43b8-b5a4-80ac9a984bd1.jpg/v1/fill/w_1920,h_1080,q_75,strp/stranger_things_s05__2025____2k_desktop_wallpaper_by_chamikanlakshan_dkto0er-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiIvZi8wYmIwZGQwZi0zYTI0LTQ4ZTMtODNhNS1iNDc2Y2EzMDdhMWYvZGt0bzBlci1hMzMwODdjYy1jNTAzLTQzYjgtYjVhNC04MGFjOWE5ODRiZDEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6Dd4mZki5r-UMR9NEBnxZx7SpiU3Z1-7gZBcRXqE0uw",
    "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRdeKT2vZBOqAaNJ6ICl1_L62b9s9LAd_oygd9A7yGraG7eYZL2DQEFdt1rGQ0jYTcBDP3C21BKa7pU0D-cXfqKMeZG_E8m9ekIxrmd_GrKSf01W-oR9bK5VVvvvBUaq_Mpf1wIXMqR1FLiBrWIzBCy3vks.jpg?r=6dd",
    "https://wallpapercat.com/w/full/a/b/0/14889-2048x1152-desktop-hd-stranger-things-background-image.jpg"
];

// DOM Elements
const heroBackground = document.getElementById('hero-background');
const prevBgBtn = document.getElementById('prev-bg');
const nextBgBtn = document.getElementById('next-bg');
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.querySelector('.close-modal');
const playButton = document.querySelector('.btn-play');
const navbar = document.querySelector('.navbar');

// Current background index
let currentBgIndex = 0;

// Initialize the app
function init() {
    // Set initial hero background
    updateHeroBackground();
    
    // Load movie data
    loadMovies();
    
    // Add event listeners
    addEventListeners();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Load movies into sections
function loadMovies() {
    const sections = ['trending', 'originals', 'dark-fantasy', 'top-rated', 'recent'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const container = section.querySelector('.movie-container');
        const moviesList = movies[sectionId];
        
        moviesList.forEach(movie => {
            const movieCard = createMovieCard(movie);
            container.appendChild(movieCard);
        });
    });
    
    // Clone some movies for "Continue Watching" section
    const continueWatchingContainer = document.querySelector('#continue-watching .movie-container');
    const continueMovies = [...movies.trending.slice(0, 3), ...movies.originals.slice(0, 3)];
    
    continueMovies.forEach(movie => {
        const movieCard = createMovieCard(movie, true);
        continueWatchingContainer.appendChild(movieCard);
    });
}

// Create movie card element
function createMovieCard(movie, isContinueWatching = false) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-video-id', movie.videoId);
    
    // Progress bar for continue watching
    const progress = isContinueWatching ? Math.floor(Math.random() * 30) + 70 : 0;
    
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="movie-image">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                <span class="year">${movie.year}</span>
                <span class="genre">${movie.genre}</span>
                ${movie.seasons ? `<span class="seasons">${movie.seasons} ${movie.seasons === '1' ? 'Season' : 'Seasons'}</span>` : ''}
            </div>
            <div class="movie-buttons">
                <button class="play-btn" title="Play"><i class="fas fa-play"></i></button>
                <button class="info-btn" title="More Info"><i class="fas fa-info-circle"></i></button>
                <button class="add-btn" title="Add to My List"><i class="fas fa-plus"></i></button>
            </div>
        </div>
        ${isContinueWatching ? `<div class="progress-bar" style="position: absolute; bottom: 0; left: 0; height: 3px; background-color: #e50914; width: ${progress}%;"></div>` : ''}
    `;
    
    return card;
}

// Update hero background
function updateHeroBackground() {
    heroBackground.style.backgroundImage = `url('${heroBackgrounds[currentBgIndex]}')`;
}

// Add event listeners
function addEventListeners() {
    // Hero background navigation
    prevBgBtn.addEventListener('click', () => {
        currentBgIndex = (currentBgIndex - 1 + heroBackgrounds.length) % heroBackgrounds.length;
        updateHeroBackground();
    });
    
    nextBgBtn.addEventListener('click', () => {
        currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
        updateHeroBackground();
    });
    
    // Auto cycle hero background
    setInterval(() => {
        currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
        updateHeroBackground();
    }, 8000);
    
    // Play button in hero section
    playButton.addEventListener('click', () => {
        openVideoModal('b9EkMc79ZSU'); // Stranger Things trailer
    });
    
    // Modal close button
    closeModalBtn.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeVideoModal();
        }
    });
    
    // Add click listeners to movie cards (delegation)
    document.addEventListener('click', (e) => {
        // Play button on movie card
        if (e.target.closest('.play-btn')) {
            const card = e.target.closest('.movie-card');
            const videoId = card.getAttribute('data-video-id');
            openVideoModal(videoId);
        }
        
        // Add to list button
        if (e.target.closest('.add-btn')) {
            const addBtn = e.target.closest('.add-btn');
            const icon = addBtn.querySelector('i');
            
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-check');
                addBtn.style.backgroundColor = 'rgba(46, 204, 113, 0.8)';
                
                // Show notification
                showNotification('Added to My List');
            } else {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-plus');
                addBtn.style.backgroundColor = '';
                
                // Show notification
                showNotification('Removed from My List');
            }
        }
        
        // Scroll buttons
        if (e.target.closest('.scroll-btn')) {
            const scrollBtn = e.target.closest('.scroll-btn');
            const movieRow = scrollBtn.closest('.movie-row');
            const container = movieRow.querySelector('.movie-container');
            const scrollAmount = 300;
            
            if (scrollBtn.classList.contains('left-scroll')) {
                container.scrollLeft -= scrollAmount;
            } else {
                container.scrollLeft += scrollAmount;
            }
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '68px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '15px';
                navLinks.style.zIndex = '1000';
            }
        });
    }
}

// Open video modal
function openVideoModal(videoId) {
    modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close video modal
function closeVideoModal() {
    modalVideo.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #e50914;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 2000;
        animation: slideDown 0.3s ease-out;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);