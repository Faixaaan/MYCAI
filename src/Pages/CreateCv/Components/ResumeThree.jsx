import React from "react";


const ResumeThree = () => {
  const container = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    backgroundColor: "#fff",
  };

  const leftSection = {
    backgroundColor: "#1f2b3a",
    color: "#fff",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const profile = {
    textAlign: "center",
  };

  const profileImg = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const sectionTitle = {
    borderBottom: "2px solid rgba(255,255,255,0.2)",
    paddingBottom: "5px",
    marginBottom: "10px",
    fontSize: "16px",
  };

  const listStyle = {
    listStyleType: "disc",
    marginLeft: "20px",
    color: "#ddd",
    fontSize: "14px",
  };

  const rightSection = {
    padding: "40px",
    backgroundColor: "#fff",
  };

  const headerStyle = {
    marginBottom: "20px",
  };

  const nameStyle = {
    fontSize: "36px",
    margin: 0,
  };

  const titleStyle = {
    color: "#555",
    marginTop: "4px",
  };

  const sectionHeader = {
    borderBottom: "2px solid #ccc",
    marginTop: "30px",
    marginBottom: "15px",
    fontSize: "20px",
  };

  const itemStyle = {
    display: "grid",
    gridTemplateColumns: "100px auto",
    gap: "10px",
    marginBottom: "15px",
  };

  const yearStyle = {
    fontWeight: 600,
    color: "#555",
  };

  const refGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  };

  // Inline media query (responsive handling)
  const responsive = `
    @media (max-width: 900px) {
      .resumeThree {
        grid-template-columns: 1fr !important;
      }
      .resumeThree .item {
        grid-template-columns: 1fr !important;
      }
      .resumeThree .refGrid {
        grid-template-columns: 1fr !important;
      }
      .resumeThree .leftSection {
        text-align: center;
      }
    }
  `;

  return (
    <>
      <style>{responsive}</style>

      <div className="resumeThree" style={container}>
        {/* LEFT SIDEBAR */}
        <div className="leftSection" style={leftSection}>
          <div style={profile}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtZF8n-erbwIQI0IVHtQ2KPc5ZP46qj8ljQ&s' alt="Profile" style={profileImg} />
            <h2 style={{ fontSize: "20px", margin: 0 }}>Isabel Mercado</h2>
            <p style={{ fontSize: "14px", color: "#ccc" }}>Marketing Manager</p>
          </div>

          <div>
            <h3 style={sectionTitle}>Contact</h3>
            <p><strong>Phone</strong><br />123-456-7890</p>
            <p><strong>Email</strong><br />hello@reallygreatsite.com</p>
            <p><strong>Address</strong><br />123 Anywhere St, Any City</p>
          </div>

          <div>
            <h3 style={sectionTitle}>Expertise</h3>
            <ul style={listStyle}>
              <li>Management Skills</li>
              <li>Creativity</li>
              <li>Digital Marketing</li>
              <li>Negotiation</li>
              <li>Critical Thinking</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div>
            <h3 style={sectionTitle}>Language</h3>
            <ul style={listStyle}>
              <li>Spanish</li>
              <li>Arabic</li>
              <li>English</li>
            </ul>
          </div>

          <div>
            <h3 style={sectionTitle}>Awards</h3>
            <p>
              <strong>Oct 2019 | Ingoude Company</strong><br />
              The Best Employee of the Year
            </p>
            <p>
              <strong>May 2015 | Timmerman Industries</strong><br />
              The Best Employee of the Year
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div style={rightSection}>
          <div style={headerStyle}>
            <h1 style={nameStyle}>Isabel Mercado</h1>
            <p style={titleStyle}>Marketing Manager</p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 style={sectionHeader}>Experience</h2>
            {[
              {
                year: "2020 – 2023",
                company: "Arowwai Industries",
                role: "Product Design Manager",
              },
              {
                year: "2019 – 2020",
                company: "Ingoude Company",
                role: "Product Design Manager",
              },
              {
                year: "2017 – 2019",
                company: "Timmerman Industries",
                role: "Product Design Manager",
              },
            ].map((exp, i) => (
              <div key={i} className="item" style={itemStyle}>
                <div style={yearStyle}>{exp.year}</div>
                <div>
                  <h4>{exp.company}</h4>
                  <strong>{exp.role}</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    sit amet sem nec risus egestas accumsan.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <h2 style={sectionHeader}>Education</h2>
            {[
              { year: "2020 – 2023", degree: "Bachelor of Business Management" },
              { year: "2016 – 2020", degree: "Bachelor of Business Management" },
              { year: "2012 – 2016", degree: "Bachelor of Business Management" },
            ].map((edu, i) => (
              <div key={i} className="item" style={itemStyle}>
                <div style={yearStyle}>{edu.year}</div>
                <div>
                  <h4>Wardiere University</h4>
                  <strong>{edu.degree}</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* REFERENCES */}
          <div>
            <h2 style={sectionHeader}>References</h2>
            <div className="refGrid" style={refGrid}>
              <div>
                <h4>Harumi Kobayashi</h4>
                <p>Wardiere Inc. / CEO</p>
                <p><strong>Phone:</strong> 123-456-7890</p>
                <p><strong>Email:</strong> hello@reallygreatsite.com</p>
              </div>
              <div>
                <h4>Bailey Dupont</h4>
                <p>Wardiere Inc. / CEO</p>
                <p><strong>Phone:</strong> 123-456-7890</p>
                <p><strong>Email:</strong> hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeThree;
