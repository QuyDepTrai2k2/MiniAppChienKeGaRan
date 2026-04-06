# Chiến Kê Gà Rán

Game bắn gà (Chicken Invaders style) chạy trên Zalo Mini App.

Người chơi điều khiển tàu vũ trụ, bắn hạ các đội quân gà qua 5 màn chơi với độ khó tăng dần.

## Gameplay

- Điều khiển tàu bằng chạm/kéo (mobile) hoặc click/kéo chuột (desktop)
- Tự động bắn đạn liên tục
- Tiêu diệt hết gà trong từng wave để qua màn
- Tránh trứng gà và va chạm với gà

### Các loại gà

| Loại | Mô tả |
|------|-------|
| Normal Chicken | Gà thường, đứng yên tại vị trí, thả trứng định kỳ |
| Fast Chicken | Bay nhanh hơn, thả trứng nhiều hơn |
| Bomber Chicken | Cỡ lớn, di chuyển ngang, thả trứng liên tục |

### Các màn chơi

- **Màn 1-2**: Gà thường và gà nhanh, làm quen gameplay
- **Màn 3**: Xuất hiện Bomber Chicken
- **Màn 4**: Kết hợp cả 3 loại gà
- **Màn 5**: Boss wave - gà có máu cao, 3 wave liên tiếp

## Tech Stack

- **Nền tảng**: Zalo Mini App (ZMP SDK + ZMP UI)
- **Frontend**: React 18 + TypeScript
- **Build**: Vite + zmp-vite-plugin
- **Styling**: Tailwind CSS + SCSS
- **Game Rendering**: HTML5 Canvas 2D

## Cấu trúc dự án

```
src/
├── app.ts                  # Entry point
├── components/             # React UI components
│   ├── CustomButton.tsx
│   ├── GameCanvas.tsx      # Canvas wrapper, khởi tạo GameEngine
│   ├── GameOverMenu.tsx
│   ├── GameWinMenu.tsx
│   ├── LevelSelectionMenu.tsx
│   ├── MainMenu.tsx
│   └── layout.tsx
├── game/                   # Game logic (không phụ thuộc React)
│   ├── GameEngine.ts       # Game loop, update, render
│   ├── AssetLoader.ts      # Tải hình ảnh
│   ├── InputManager.ts     # Xử lý touch/mouse
│   ├── Player.ts           # Tàu vũ trụ
│   ├── Missile.ts          # Đạn bắn
│   ├── Egg.ts              # Trứng gà (đạn của enemy)
│   ├── Collision.ts        # Phát hiện va chạm AABB
│   ├── enemies/            # Hệ thống enemy
│   │   ├── enemyTypes.ts   # Interface IEnemy, config types
│   │   ├── BaseEnemy.ts    # Abstract class chung
│   │   ├── NormalChicken.ts
│   │   ├── FastChicken.ts
│   │   ├── BomberChicken.ts
│   │   └── enemyRegistry.ts # Factory tạo enemy theo type
│   └── levels/             # Định nghĩa màn chơi
│       ├── levelTypes.ts
│       ├── level1.ts - level5.ts
│       └── index.ts
├── css/
│   ├── app.scss
│   └── tailwind.scss
├── pages/
│   └── index.tsx           # Trang chính, quản lý game state
└── static/images/          # Hình ảnh game
```

## Development

### Yêu cầu

- [Node.js](https://nodejs.org/) (>= 14)
- [Visual Studio Code](https://code.visualstudio.com/) (nếu dùng Extension)

### Cách 1: Zalo Mini App Extension (khuyên dùng)

1. Cài [Zalo Mini App Extension](https://mini.zalo.me/docs/dev-tools) cho VS Code
2. Mở project, vào tab **Home** > **Config App ID** > **Install Dependencies**
3. Vào tab **Run** > chọn launcher > **Start**

### Cách 2: Zalo Mini App CLI

1. Cài [Zalo Mini App CLI](https://mini.zalo.me/docs/dev-tools/cli/intro/)
2. Chạy:
   ```bash
   npm install
   zmp start
   ```
3. Mở `localhost:3000` trong trình duyệt

## Deployment

### Dùng Extension

Vào tab **Deploy** > **Login** > **Deploy**

### Dùng CLI

```bash
zmp login
zmp deploy
```

Sau đó quét mã QR trong Zalo để mở mini app.

## Tài liệu tham khảo

- [Zalo Mini App](https://mini.zalo.me/)
- [ZMP SDK](https://mini.zalo.me/documents/api/)
- [ZaUI Components](https://mini.zalo.me/documents/zaui/)
