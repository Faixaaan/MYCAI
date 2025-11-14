import React from "react";

const ResumeThree = () => {
  const container = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#fff",
  };

  const leftSection = {
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "35px 25px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  };

  const rightSection = {
    padding: "45px 35px",
    backgroundColor: "#fff",
    lineHeight: "1.6",
  };

  const sectionTitle = {
    borderBottom: "2px solid rgba(255,255,255,0.3)",
    paddingBottom: "6px",
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const sectionHeader = {
    borderBottom: "2px solid #ccc",
    paddingBottom: "8px",
    marginBottom: "18px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const profileImg = {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  };

  return (
    <div style={container}>
      {/* LEFT SIDEBAR */}
      <div style={leftSection}>
        <div style={{textAlign: "center"}}>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtZF8n-erbwIQI0IVHtQ2KPc5ZP46qj8ljQ&s' 
            alt="Profile" 
            style={profileImg} 
          />
          <h1 style={{fontSize: "22px", margin: "0 0 4px 0", fontWeight: "bold"}}>Isabel Mercado</h1>
          <p style={{fontSize: "14px", color: "#ecf0f1", margin: 0}}>Marketing Manager</p>
        </div>

        <hr style={{border: "1px solid rgba(255,255,255,0.2)", width: "100%", margin: "5px 0"}} />

        <div>
          <h3 style={sectionTitle}>Contact</h3>
          <p style={{fontSize: "13px", margin: "8px 0"}}><strong>Phone</strong><br />123-456-7890</p>
          <p style={{fontSize: "13px", margin: "8px 0"}}><strong>Email</strong><br />hello@reallygreatsite.com</p>
          <p style={{fontSize: "13px", margin: "8px 0"}}><strong>Address</strong><br />123 Anywhere St, Any City</p>
        </div>

        <div>
          <h3 style={sectionTitle}>Expertise</h3>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Management Skills</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Creativity</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Digital Marketing</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Negotiation</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Critical Thinking</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Leadership</p>
        </div>

        <div>
          <h3 style={sectionTitle}>Language</h3>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Spanish</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>Arabic</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>English</p>
        </div>

        <div>
          <h3 style={sectionTitle}>Awards</h3>
          <p style={{fontSize: "13px", margin: "8px 0"}}>
            <strong>Oct 2019 | Ingoude Company</strong><br />
            The Best Employee of the Year
          </p>
          <p style={{fontSize: "13px", margin: "8px 0"}}>
            <strong>May 2015 | Timmerman Industries</strong><br />
            The Best Employee of the Year
          </p>
        </div>

        <div>
          <h3 style={sectionTitle}>Experience</h3>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2020 - 2023<br />Arowwai Industries</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2019 - 2020<br />Ingoude Company</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2017- 2019<br />Timmerman Industries</p>
        </div>

        <div>
          <h3 style={sectionTitle}>Education</h3>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2020 - 2023<br />Wardiere University</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2016 - 2020<br />Wardiere University</p>
          <p style={{fontSize: "13px", margin: "6px 0"}}>2012 - 2016<br />Wardiere University</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div style={rightSection}>
        <div style={{marginBottom: "25px"}}>
          <h1 style={{fontSize: "28px", margin: "0 0 4px 0", fontWeight: "bold"}}>Isabel Mercado</h1>
          <p style={{fontSize: "16px", color: "#666", margin: 0}}>Marketing Manager</p>
        </div>

        <hr style={{border: "1px solid #ccc", margin: "18px 0"}} />

        <div style={{marginBottom: "25px"}}>
          <h2 style={sectionHeader}>Experience</h2>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
          
          <h3 style={{fontWeight: "bold", margin: "18px 0 8px 0", fontSize: "16px"}}>Product Design Manager</h3>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
          
          <h3 style={{fontWeight: "bold", margin: "18px 0 8px 0", fontSize: "16px"}}>Product Design Manager</h3>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
        </div>

        <hr style={{border: "1px solid #ccc", margin: "18px 0"}} />

        <div style={{marginBottom: "25px"}}>
          <h2 style={sectionHeader}>Education</h2>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
          
          <h3 style={{fontWeight: "bold", margin: "18px 0 8px 0", fontSize: "16px"}}>Bachelor of Business Management</h3>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
          
          <h3 style={{fontWeight: "bold", margin: "18px 0 8px 0", fontSize: "16px"}}>Bachelor of Business Management</h3>
          <p style={{fontSize: "14px", marginBottom: "16px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </p>
        </div>

        <hr style={{border: "1px solid #ccc", margin: "18px 0"}} />

        <div>
          <h2 style={sectionHeader}>References</h2>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px"}}>
            <div>
              <h4 style={{margin: "0 0 8px 0", fontSize: "15px", fontWeight: "bold"}}>Harumi Kobayashi</h4>
              <p style={{margin: "0 0 10px 0", fontSize: "13px"}}>Wardiere Inc. / CEO</p>
              <p style={{margin: "4px 0", fontSize: "13px"}}><strong>Phone:</strong> 123-456-7890</p>
              <p style={{margin: "4px 0", fontSize: "13px"}}><strong>Email:</strong> hello@reallygreatsite.com</p>
            </div>
            <div>
              <h4 style={{margin: "0 0 8px 0", fontSize: "15px", fontWeight: "bold"}}>Bailey Dupont</h4>
              <p style={{margin: "0 0 10px 0", fontSize: "13px"}}>Wardiere Inc. / CEO</p>
              <p style={{margin: "4px 0", fontSize: "13px"}}><strong>Phone:</strong> 123-456-7890</p>
              <p style={{margin: "4px 0", fontSize: "13px"}}><strong>Email:</strong> hello@reallygreatsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeThree;