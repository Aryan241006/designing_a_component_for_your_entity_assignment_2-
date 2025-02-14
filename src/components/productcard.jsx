import ViewProductButton from './button';

const ProductCard = () => {
  // Styles
  const styles = {
    productCard: {
      width: '180px',
      border: '1px solid #e1e1e1',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      width: '140px',
      height: '140px',
      objectFit: 'contain',
      display: 'block',
      margin: '8px auto',
    },
    infoContainer: {
      padding: '12px',
    },
    productName: {
      fontSize: '14px',
      fontWeight: '600',
      margin: '0 0 4px 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    productPrice: {
      fontSize: '14px',
      fontWeight: '700',
      color: 'white',  // Changed the color to white
      margin: '0 0 8px 0',
      backgroundColor: '#333', // Added a background color to make white text visible
      padding: '4px 8px',
      borderRadius: '4px',
      display: 'inline-block',
    },
    buttonContainer: {
      marginTop: '4px',
    }
  };

  // Static product details
  const productDetails = {
    name: "Apple AirPods Max",
    price: "$549.99",
    imageUrl: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1607605440/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/231421_n3yvmu.png"
  };

  return (
    <div 
      style={styles.productCard}
      onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'}
      onMouseOut={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'}
    >
      <div style={styles.imageContainer}>
        <img
          src={productDetails.imageUrl}
          alt={productDetails.name}
          style={styles.image}
        />
      </div>
      
      <div style={styles.infoContainer}>
        <h2 style={styles.productName}>{productDetails.name}</h2>
        <p style={styles.productPrice}>{productDetails.price}</p>
        
        <div style={styles.buttonContainer}>
          <ViewProductButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;