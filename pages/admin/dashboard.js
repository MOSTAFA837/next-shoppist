import Layout from "@/components/admin/layout/layout";
import styles from "../../styles/dashboard.module.scss";
import { ToastContainer, toast } from "react-toastify";

export default function dashboard() {
  return (
    <div>
      <Layout>
        <button onClick={() => toast.error("ok !!")}>Toastify</button>
      </Layout>
    </div>
  );
}
