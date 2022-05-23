import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      className="nav"
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus" style={{ padding: "15px" }}>
        Cart:{" "}
        <span className="navCartCount">{/* total items in cart here */} 0</span>
        <Link to={"/checkout"}>
          <button
            className="navCartCheckout"
            style={{ marginLeft: "15px", cursor: "pointer" }}
          >
            Checkout
          </button>
        </Link>
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
