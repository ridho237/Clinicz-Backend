# 📊 Diagnocare - API Documentation

Diagnocare merupakan sebuah sistem berbasis AI yang dapat membantu pengguna dalam melakukan deteksi penyakit, rekomendasi obat, pencarian artikel kesehatan, hingga lokasi klinik terdekat. Selain itu, sistem juga memiliki fitur chatbot berbasis AI.

---

## 🔒 Authentication API

### 1️⃣ Register User

**Endpoint:**\
`POST /user/signup`

**Body (form-data):**

| Param        | Value                                     | Type |
| ------------ | ----------------------------------------- | ---- |
| username     | ridho123                                  | text |
| email        | [ridho@gmail.com](mailto:ridho@gmail.com) | text |
| password     | passwordku                                | text |
| gender       | Laki Laki                                 | text |
| dateOfBirth  | 1995-10-20                                | text |
| profileImage | (upload file)                             | file |

**Authentication:**\
No Auth

---

### 2️⃣ Login User

**Endpoint:**\
`POST /user/login`

**Body (JSON):**

```json
{
	"username": "ridho123",
	"password": "passwordku"
}
```

**Authentication:**\
No Auth

---

### 3️⃣ Get Profile

**Endpoint:**\
`GET /user/profile`

**Authentication:**\
Bearer Token

---

### 4️⃣ Update Profile

**Endpoint:**\
`PUT /user/profile`

**Body (form-data):**

| Param        | Value                                           | Type |
| ------------ | ----------------------------------------------- | ---- |
| username     | johnny                                          | text |
| email        | [johnny@example.com](mailto:johnny@example.com) | text |
| dateOfBirth  | 1997-01-15                                      | text |
| gender       | female                                          | text |
| profileImage | (upload file)                                   | file |

**Authentication:**\
Bearer Token

---

### 5️⃣ Update Password

**Endpoint:**\
`PUT /user/update-password`

**Body (JSON):**

```json
{
	"currentPassword": "passwordLama123",
	"newPassword": "passwordBaru456"
}
```

**Authentication:**\
Bearer Token

---

### 6️⃣ Delete Account

**Endpoint:**\
`DELETE /user/delete-account`

**Authentication:**\
Bearer Token

---

### 7️⃣ Logout

**Endpoint:**\
`POST /user/logout`


---

## 🤖 Artificial Intelligence API

### 1️⃣ Prediksi Penyakit

**Endpoint:**\
`POST /predict-penyakit`

**Headers:**\
Content-Type: application/json

**Body (JSON):**

```json
{
	"text": "feses berdarah, nyeri saat mengejan, benjolan di sekitar anus, sakit perut setelah buang air besar"
}
```

**Authentication:**\
Bearer Token

---

### 2️⃣ Prediksi Obat

**Endpoint:**\
`POST /predict-obat`

**Body (JSON):**

```json
{
	"gejala": "nyeri, nyeri sedang di mata, penglihatan kabur, ...",
	"penyakit": "Keratitis Jamur"
}
```

**Authentication:**\
Bearer Token

---

### 3️⃣ Get Detail Prediksi Obat

**Endpoint:**\
`GET /predict-obat/:namaObat`

**Authentication:**\
Bearer Token

---

### 4️⃣ Rekomendasi Obat

**Endpoint:**\
`POST /rekomendasi-obat`

**Body (JSON):**

```json
{
	"obat": "Natacyn",
	"penyakit": "Keratitis Jamur"
}
```

**Authentication:**\
Bearer Token

---

### 5️⃣ Get Detail Rekomendasi Obat

**Endpoint:**\
`GET /rekomendasi-obat/:namaObat`

**Authentication:**\
Bearer Token

---

### 6️⃣ Chatbot

**Endpoint:**\
`POST /chat`

**Body (JSON):**

```json
{
	"message": "hai gemini"
}
```

**Authentication:**\
Bearer Token (Opsional)

---

## 📄 Article API

### 1️⃣ Get All Articles

**Endpoint:**\
`GET /article`


### 2️⃣ Get Article By ID

**Endpoint:**\
`GET /article/:id`


---

## 📍 Nearby Clinics API

### 1️⃣ Get Location Clinics

**Endpoint:**\
`POST /location`

**Body (JSON):**

```json
{
	"lat": -6.455959597692272,
	"lng": 106.80630011262043
}
```

---

## 🏪 Shop (Obat) API

### 1️⃣ Get All Obat

**Endpoint:**\
`GET /obat`


### 2️⃣ Get Obat By Name

**Endpoint:**\
`GET /obat/:namaObat`


### 3️⃣ Get Obat By Kategori

**Endpoint:**\
`GET /obat/kategori/:kategoriObat`


---

## 📊 User History API

### 1️⃣ Get Penyakit Histories

**Endpoint:**\
`GET /riwayat-penyakit`

**Authentication:**\
Bearer Token

### 2️⃣ Get Obat Histories

**Endpoint:**\
`GET /riwayat-obat`

**Authentication:**\
Bearer Token

### 3️⃣ Get History Detail

**Endpoint:**\
`GET /riwayat/:id`

**Authentication:**\
Bearer Token

---

## 🚀 Setup & Deployment (Optional)

Kamu bisa tambahkan bagian setup, misal:

- Install dependencies: `npm install`
- Run server: `npm start`
- Konfigurasi environment (API Key, JWT Secret, dsb.)

---

> **Generated & Improved from:** Postman Collection (postman-to-markdown)
