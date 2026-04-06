# Chien Ke Ga Ran

Game ban ga (Chicken Invaders style) chay tren Zalo Mini App.

Nguoi choi dieu khien tau vu tru, ban ha cac doi quan ga qua 5 man choi voi do kho tang dan.

## Gameplay

- Dieu khien tau bang cham/keo (mobile) hoac click/keo chuot (desktop)
- Tu dong ban dan lien tuc
- Tieu diet het ga trong tung wave de qua man
- Tranh trung ga va va cham voi ga

### Cac loai ga

| Loai | Mo ta |
|------|-------|
| Normal Chicken | Ga thuong, dung yen tai vi tri, tha trung dinh ky |
| Fast Chicken | Bay nhanh hon, tha trung nhieu hon |
| Bomber Chicken | Co lon, di chuyen ngang, tha trung lien tuc |

### Cac man choi

- **Man 1-2**: Ga thuong va ga nhanh, lam quen gameplay
- **Man 3**: Xuat hien Bomber Chicken
- **Man 4**: Ket hop ca 3 loai ga
- **Man 5**: Boss wave - ga co mau cao, 3 wave lien tiep

## Tech Stack

- **Platform**: Zalo Mini App (ZMP SDK + ZMP UI)
- **Frontend**: React 18 + TypeScript
- **Build**: Vite + zmp-vite-plugin
- **Styling**: Tailwind CSS + SCSS
- **Game Rendering**: HTML5 Canvas 2D

## Cau truc du an

```
src/
├── app.ts                  # Entry point
├── components/             # React UI components
│   ├── CustomButton.tsx
│   ├── GameCanvas.tsx      # Canvas wrapper, khoi tao GameEngine
│   ├── GameOverMenu.tsx
│   ├── GameWinMenu.tsx
│   ├── LevelSelectionMenu.tsx
│   ├── MainMenu.tsx
│   └── layout.tsx
├── game/                   # Game logic (khong phu thuoc React)
│   ├── GameEngine.ts       # Game loop, update, render
│   ├── AssetLoader.ts      # Tai hinh anh
│   ├── InputManager.ts     # Xu ly touch/mouse
│   ├── Player.ts           # Tau vu tru
│   ├── Missile.ts          # Dan ban
│   ├── Egg.ts              # Trung ga (dan cua enemy)
│   ├── Collision.ts        # Phat hien va cham AABB
│   ├── enemies/            # He thong enemy
│   │   ├── enemyTypes.ts   # Interface IEnemy, config types
│   │   ├── BaseEnemy.ts    # Abstract class chung
│   │   ├── NormalChicken.ts
│   │   ├── FastChicken.ts
│   │   ├── BomberChicken.ts
│   │   └── enemyRegistry.ts # Factory tao enemy theo type
│   └── levels/             # Dinh nghia man choi
│       ├── levelTypes.ts
│       ├── level1.ts - level5.ts
│       └── index.ts
├── css/
│   ├── app.scss
│   └── tailwind.scss
├── pages/
│   └── index.tsx           # Trang chinh, quan ly game state
└── static/images/          # Hinh anh game
```

## Development

### Yeu cau

- [Node.js](https://nodejs.org/) (>= 14)
- [Visual Studio Code](https://code.visualstudio.com/) (neu dung Extension)

### Cach 1: Zalo Mini App Extension (khuyen dung)

1. Cai [Zalo Mini App Extension](https://mini.zalo.me/docs/dev-tools) cho VS Code
2. Mo project, vao tab **Home** > **Config App ID** > **Install Dependencies**
3. Vao tab **Run** > chon launcher > **Start**

### Cach 2: Zalo Mini App CLI

1. Cai [Zalo Mini App CLI](https://mini.zalo.me/docs/dev-tools/cli/intro/)
2. Chay:
   ```bash
   npm install
   zmp start
   ```
3. Mo `localhost:3000` trong trinh duyet

## Deployment

### Dung Extension

Vao tab **Deploy** > **Login** > **Deploy**

### Dung CLI

```bash
zmp login
zmp deploy
```

Sau do quet ma QR trong Zalo de mo mini app.

## Tai lieu tham khao

- [Zalo Mini App](https://mini.zalo.me/)
- [ZMP SDK](https://mini.zalo.me/documents/api/)
- [ZaUI Components](https://mini.zalo.me/documents/zaui/)
