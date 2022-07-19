import { Button, Header } from 'semantic-ui-react';
import styles from "./Item.module.css";

export default function Item({ item }) {
    const { image_link, name, price, description, update_at, category, product_type, product_link } = item;

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={image_link} alt={name} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit}>{name}</strong>
                    <strong className={styles.num_price}>${price}</strong>
                    <span className={styles.txt_info}>
                        {category ? `${category}` : ""}
                        {product_type}
                    </span>
                    <Button color="orange">구매하기</Button>
                </div>
            </div>
            <Header as="h3">Description</Header>
            <p>{description}</p>
            
        </>
    )
}