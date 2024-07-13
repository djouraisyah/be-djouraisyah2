import "dotenv/config";
import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: viaduct.proxy.rlwy.net,
  port: 40920,
  user: railway,
  password: B~9JtKyLmZvYhU28iyGrSZqtfRfBJaEV,
  database: railway,
});

pool
  .getConnection()
  .then(() => {
    console.log("Berhasil terhubung ke basis data.");
  })
  .catch((err) => {
    console.error("Gagal terhubung ke basis data:", err);
  });
