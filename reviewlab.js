const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');

function toggleMenu(){
	const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen); 
    menuToggle.textContent = isOpen ? '✕' : '☰';
}

function closeMenu(){
	sidebar.classList.remove('open');
	overlay.classList.remove('active');
	menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);


const contentData = {
    about: {
        title: "", 
        subtitle: "",
        body: `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 2rem;">
                <img src="https://i.pravatar.cc/200?img=12" alt="Foto Profil" style="border-radius: 50%; width: 140px; height: 140px; object-fit: cover; border: 4px solid var(--bg-main); box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 1rem;">
                <h2 style="color: var(--text-main); font-size: 1.75rem; margin-bottom: 0.25rem;">Fel</h2>
                <p style="color: var(--text-light); font-weight: 500; margin-bottom: 1rem;">Computer Science Student & Web Developer</p>
                
                <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <span style="background: var(--primary); color: white; padding: 0.3rem 0.8rem; border-radius: 0.375rem; font-size: 0.85rem; font-weight: 500;">UI/UX</span>
                    <span style="background: #10b981; color: white; padding: 0.3rem 0.8rem; border-radius: 0.375rem; font-size: 0.85rem; font-weight: 500;">Database Architecture</span>
                    <span style="background: #64748b; color: white; padding: 0.3rem 0.8rem; border-radius: 0.375rem; font-size: 0.85rem; font-weight: 500;">Fullstack</span>
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button style="background: var(--primary); color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 0.375rem; cursor: pointer; font-weight: 500; transition: opacity 0.2s;">Follow</button>
                    <button style="background: transparent; color: var(--primary); border: 1px solid var(--primary); padding: 0.5rem 1.5rem; border-radius: 0.375rem; cursor: pointer; font-weight: 500;">Message</button>
                </div>
            </div>

            <div style="border-top: 1px solid var(--border); padding-top: 1.5rem;">
                <h4 style="color: var(--text-main); margin-bottom: 1rem; font-size: 1.25rem;">About Me</h4>
                <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1rem;">
                    Halo! Saya adalah seorang mahasiswa ilmu komputer yang fokus pada pengembangan website modern dan perancangan sistem backend yang efisien. Saya memiliki pemahaman mendalam dalam mendesain arsitektur database, termasuk teknik normalisasi (1NF, 2NF, 3NF) serta penyusunan Entity Relationship Diagram (ERD).
                </p>
                <p style="color: var(--text-light); line-height: 1.7;">
                    Selain itu, saya juga terbiasa memecahkan masalah logika pemrograman dan memvisualisasikan proses sistem melalui flowchart sebelum mengimplementasikannya ke dalam kode SQL maupun bahasa pemrograman lainnya.
                </p>
            </div>
        `
    },
    portfolio: {
        title: "Portfolio",
        subtitle: "Selected Works",
        body: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
                <!-- Card 1 -->
                <div style="border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; background: var(--bg-card); display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <img src="https://picsum.photos/400/250?random=1" style="width: 100%; height: 160px; object-fit: cover;">
                    <div style="padding: 1.25rem; flex: 1; display: flex; flex-direction: column;">
                        <h5 style="color: var(--text-main); margin-bottom: 0.5rem; font-size: 1.1rem;">Hospital Database System</h5>
                        <p style="color: var(--text-light); font-size: 0.9rem; flex: 1; margin-bottom: 1rem; line-height: 1.5;">Strukturisasi dan normalisasi data hingga 3NF untuk sistem manajemen administrasi rumah sakit.</p>
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                            <span style="background: var(--bg-main); color: var(--text-light); padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; border: 1px solid var(--border);">SQL</span>
                            <span style="background: var(--bg-main); color: var(--text-light); padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; border: 1px solid var(--border);">ERD</span>
                        </div>
                        <button style="background: transparent; color: var(--primary); border: 1px solid var(--primary); padding: 0.4rem; border-radius: 0.25rem; cursor: pointer; width: 100%; font-size: 0.85rem; font-weight: 500;">View Project</button>
                    </div>
                </div>

                <!-- Card 2 -->
                <div style="border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; background: var(--bg-card); display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <img src="https://picsum.photos/400/250?random=2" style="width: 100%; height: 160px; object-fit: cover;">
                    <div style="padding: 1.25rem; flex: 1; display: flex; flex-direction: column;">
                        <h5 style="color: var(--text-main); margin-bottom: 0.5rem; font-size: 1.1rem;">Retail Logic Flowchart</h5>
                        <p style="color: var(--text-light); font-size: 0.9rem; flex: 1; margin-bottom: 1rem; line-height: 1.5;">Perancangan flowchart logika untuk kalkulasi diskon dan grading secara dinamis.</p>
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                            <span style="background: var(--bg-main); color: var(--text-light); padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; border: 1px solid var(--border);">Flowchart</span>
                            <span style="background: var(--bg-main); color: var(--text-light); padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; border: 1px solid var(--border);">Algorithm</span>
                        </div>
                        <button style="background: transparent; color: var(--primary); border: 1px solid var(--primary); padding: 0.4rem; border-radius: 0.25rem; cursor: pointer; width: 100%; font-size: 0.85rem; font-weight: 500;">View Project</button>
                    </div>
                </div>
            </div>
        `
    },
    services: {
        title: "Skills & Services",
        subtitle: "Apa yang bisa saya lakukan",
        body: `
            <h4 style="color: var(--text-main); margin-bottom: 1.25rem; font-size: 1.1rem;">Technical Skills</h4>
            
            <!-- Progress Bar 1 -->
            <div style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span style="font-weight: 500; font-size: 0.95rem; color: var(--text-main);">Database Normalization & SQL</span>
                    <span style="color: var(--text-light); font-size: 0.9rem;">95%</span>
                </div>
                <div style="background: var(--border); border-radius: 999px; height: 8px; overflow: hidden;">
                    <div style="background: var(--primary); width: 95%; height: 100%; border-radius: 999px;"></div>
                </div>
            </div>
            
            <!-- Progress Bar 2 -->
            <div style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span style="font-weight: 500; font-size: 0.95rem; color: var(--text-main);">HTML, CSS & JavaScript</span>
                    <span style="color: var(--text-light); font-size: 0.9rem;">85%</span>
                </div>
                <div style="background: var(--border); border-radius: 999px; height: 8px; overflow: hidden;">
                    <div style="background: #10b981; width: 85%; height: 100%; border-radius: 999px;"></div>
                </div>
            </div>
            
            <!-- Progress Bar 3 -->
            <div style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span style="font-weight: 500; font-size: 0.95rem; color: var(--text-main);">Flowchart & Logic Design</span>
                    <span style="color: var(--text-light); font-size: 0.9rem;">88%</span>
                </div>
                <div style="background: var(--border); border-radius: 999px; height: 8px; overflow: hidden;">
                    <div style="background: #f59e0b; width: 88%; height: 100%; border-radius: 999px;"></div>
                </div>
            </div>

            <h4 style="color: var(--text-main); margin-bottom: 1rem; border-top: 1px solid var(--border); padding-top: 1.5rem; font-size: 1.1rem;">Layanan Khusus</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div style="padding: 1.25rem; border: 1px solid var(--border); border-radius: 0.5rem; background: var(--bg-main);">
                    <h5 style="color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem;">Architecture Setup</h5>
                    <p style="font-size: 0.85rem; color: var(--text-light); line-height: 1.5;">Desain tabel efisien untuk menghilangkan anomali dan redundansi data.</p>
                </div>
                <div style="padding: 1.25rem; border: 1px solid var(--border); border-radius: 0.5rem; background: var(--bg-main);">
                    <h5 style="color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem;">Web Prototyping</h5>
                    <p style="font-size: 0.85rem; color: var(--text-light); line-height: 1.5;">Membangun tampilan front-end interaktif yang responsif di segala perangkat.</p>
                </div>
            </div>
        `
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Mari Bekerja Sama",
        body: `
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 100px; text-align: center; padding: 1.5rem 1rem; border: 1px solid var(--border); border-radius: 0.5rem; background: var(--bg-main);">
                    <h3 style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.25rem;">128</h3>
                    <p style="font-size: 0.85rem; color: var(--text-light); font-weight: 500;">Posts</p>
                </div>
                <div style="flex: 1; min-width: 100px; text-align: center; padding: 1.5rem 1rem; border: 1px solid var(--border); border-radius: 0.5rem; background: var(--bg-main);">
                    <h3 style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.25rem;">2.4K</h3>
                    <p style="font-size: 0.85rem; color: var(--text-light); font-weight: 500;">Followers</p>
                </div>
                <div style="flex: 1; min-width: 100px; text-align: center; padding: 1.5rem 1rem; border: 1px solid var(--border); border-radius: 0.5rem; background: var(--bg-main);">
                    <h3 style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.25rem;">87</h3>
                    <p style="font-size: 0.85rem; color: var(--text-light); font-weight: 500;">Following</p>
                </div>
            </div>

            <div style="border: 1px solid var(--border); border-radius: 0.5rem; padding: 1.5rem; background: var(--bg-card);">
                <h4 style="margin-bottom: 1rem; color: var(--text-main); font-size: 1.1rem;">Kirim Pesan Langsung</h4>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <input type="text" placeholder="Nama Lengkap" style="padding: 0.85rem; border: 1px solid var(--border); border-radius: 0.375rem; font-family: inherit; width: 100%; box-sizing: border-box; background: var(--bg-main); outline: none;">
                    <input type="email" placeholder="Alamat Email" style="padding: 0.85rem; border: 1px solid var(--border); border-radius: 0.375rem; font-family: inherit; width: 100%; box-sizing: border-box; background: var(--bg-main); outline: none;">
                    <textarea placeholder="Tulis deskripsi proyek atau pesan Anda..." rows="4" style="padding: 0.85rem; border: 1px solid var(--border); border-radius: 0.375rem; font-family: inherit; width: 100%; box-sizing: border-box; background: var(--bg-main); resize: vertical; outline: none;"></textarea>
                    <button style="background: var(--primary); color: white; border: none; padding: 0.85rem; border-radius: 0.375rem; cursor: pointer; font-weight: 500; font-size: 0.95rem; margin-top: 0.5rem;">Send Message</button>
                </div>
            </div>
        `
    }
};

const navItems = document.querySelectorAll('.nav-item');
const titleEl = document.getElementById('content-title');
const subtitleEl = document.getElementById('content-subtitle');
const bodyEl = document.getElementById('content-body');

function setPage(key) {
    if(contentData[key]){
        titleEl.textContent = contentData[key].title;
        subtitleEl.textContent = contentData[key].subtitle;
        bodyEl.innerHTML = contentData[key].body;
        
         titleEl.style.display = contentData[key].title ? 'block' : 'none';
        subtitleEl.style.display = contentData[key].subtitle ? 'block' : 'none';
    }
}

setPage('about');

navItems.forEach(item=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
		navItems.forEach(i=>i.classList.remove('active'));
		item.classList.add('active');
		
        const key = item.getAttribute('href').substring(1);
		setPage(key);
		closeMenu();
	});
});
