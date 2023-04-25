import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>we accept</h3>

      <div className={styles.footer__flexwrap}>
        <img src="../../images/payment/payment-method.png" alt="" />
      </div>
    </div>
  );
}
