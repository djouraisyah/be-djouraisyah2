import "dotenv/config";
import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: roundhouse.proxy.rlwy.net,
  port: 49813,
  user: root,
  password: LfidjdalfmMwMHACmLJHnscEHbrXJlqi,
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
