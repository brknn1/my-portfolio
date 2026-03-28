// src/components/Header.jsx

function Header() {
  return (
    <section className="hero-section">
      
      {/* Левая колонка: Крупный текст */}
      <div className="hero-text">
        <h1 className="hero-title">
          I'm Illia.<br />
          Frontend.<br />
          Developer.
        </h1>
        <p className="hero-subtitle">
          Building responsive, accessible, and user-friendly web applications. A Right, Not a Privilege.
        </p>
      </div>

      {/* Правая колонка: Прямоугольное фото */}
      <div className="hero-img-container">
        {/* Берем фото из папки public, как мы настроили ранее */}
        <img src="/avatar.jpeg" alt="Illia Zolotko" className="profile-img-hero" />
      </div>

    </section>
  );
}

export default Header;