import "./style.css";

export default function Footer({ simple,children }) {
  if (simple) {
    return (
      <div className="footer-component-simple">
        ©CopyRight - Final Project Tigers Group - 2023
      </div>
    );
  }

  return (
    <div className="footer-component">
      ©CopyRight - Final Project Tigers Group - 2023
      <div>{children}</div>
    </div>
  );
}
