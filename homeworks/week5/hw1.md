## 資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 必填(NN) | 說明 |
|--------|--------|--------|--------|
| c_id | integer | Y | PK，留言 id |
| u_id | integer | Y | 使用者 id |
| content | text | Y | 留言內容 |
| parent_id | integer | Y | 父層 id；第一層，則為0 |
| status | tinyint(1) | Y | 狀態，1：存在，0：刪除，預設為1 |
| create_time | DATETIME | Y | 建立時間 |
| update_time | DATETIME |  | 更新時間 |


## 資料庫名稱：users

| 欄位名稱 | 欄位型態 | 必填(NN) | 說明 |
|--------|--------|--------|--------|
| u_id | integer | Y | PK，使用者 id |
| username | VARCHAR(16) | Y | 帳號 |
| password | VARCHAR(16) | Y | 密碼 |
| nickname | VARCHAR(64) | Y | 暱稱 |
| avatar | VARCHAR(500) | Y | 頭像 |
| status | tinyint(1) | Y | 狀態，1：存在，0：刪除，預設為1 |
| create_time | DATETIME | Y | 建立時間 |
| update_time | DATETIME |  | 更新時間 |