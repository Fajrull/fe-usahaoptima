import ButtonDropdownSidebar from "../../Fragments/Dashboard/Button-Dropdown-Sidebar";
import ButtonSidebar from "../../Fragments/Dashboard/Button-Sidebar";

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <a
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="../../public/assets/img/dashboard/usahaoptima.jpg"
              alt="logo"
              className="logo"
            />
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mb-2">
              <a
                className="nav-link collapsed active link-dashboard"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <img
                  src="../../public/assets/img/icons/dashboard.png"
                  className="me-1"
                />
                <span>Dashboard</span>
              </a>
            </li>

            <ButtonSidebar
              image="../../public/assets/img/icons/produk.png"
              title="Produk"
            />

            <ButtonSidebar
              image="../../public/assets/img/icons/penjualan.png"
              title="Penjualan"
            />

            <ButtonSidebar
              image="../../public/assets/img/icons/edukasi.png"
              title="Edukasi"
            />

            <ButtonSidebar
              image="../../public/assets/img/icons/biaya.png"
              title="Biaya Operasional"
            />

            <ButtonDropdownSidebar
              id1="#collapseExample1"
              id2="collapseExample1"
              controls="collapseExample1"
              image="../../public/assets/img/icons/laporan.png"
              title="Laporan"
              dropdownImage1="../../public/assets/img/icons/keuangan.png"
              dropdownTitle1="Keuangan"
              dropdownImage2="../../public/assets/img/icons/stock.png"
              dropdownTitle2="Stok"
            />

            <ButtonDropdownSidebar
              id1="#collapseExample2"
              id2="collapseExample2"
              controls="collapseExample2"
              image="../../public/assets/img/icons/pengaturan.png"
              title="Pengaturan"
              dropdownImage1="../../public/assets/img/icons/user-role.png"
              dropdownTitle1="User Role"
              dropdownImage2="../../public/assets/img/icons/add-article.png"
              dropdownTitle2="Tambah Artikel"
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
