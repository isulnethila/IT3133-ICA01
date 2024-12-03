import '../assets/CSS/layout.css';
export default function Product({flower}){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/${flower.img}`)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>(flower.qty=+e.target.value)}/>
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}