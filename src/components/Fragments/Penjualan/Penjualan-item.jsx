import { deleteSalesItem } from "../../../services/Penjualan-Services";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const PenjualanItem = (props) => {
  const { _id, sales_name, product_id, quantity, total_price } =
    props.penjualan;

  const handleDeleteSales = async () => {
    const PenjualanId = _id;

    const isConfirmed = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat memulihkan Data penjualan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteSalesItem(PenjualanId);

        Swal.fire("Dihapus!", "Data penjualan telah dihapus.", "success").then(
          () => {
            window.location.reload();
          }
        );
      } catch (error) {
        console.log(error);

        Swal.fire(
          "Error",
          "Terjadi kesalahan saat menghapus  Data penjualan.",
          "error"
        );
      }
    } else {
      Swal.fire(
        " Data penjualan Anda aman!",
        "Tidak ada perubahan yang dibuat.",
        "info"
      );
    }
  };

  return (
    <>
      <tr>
        <td className="td">{sales_name}</td>
        <td className="td">{product_id}</td>
        <td className="td">{quantity}</td>
        <td className="td">{total_price}</td>
        <td>
          <i className="fa-regular fa-pen-to-square edit"></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteSales}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default PenjualanItem;
