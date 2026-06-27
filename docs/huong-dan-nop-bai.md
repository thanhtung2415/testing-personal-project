# Huong Dan Lam Va Nop Bai

## 1. Mo project

Thu muc bai lam:

```text
outputs/software-testing-final-projects
```

Mo terminal tai thu muc nay:

```bash
cd outputs/software-testing-final-projects
npm install
```

## 2. Kiem tra bai truoc khi push

Chay tung lenh:

```bash
npm run test:whitebox
npm run test:swagstore
npm run test:api
npm run test:ui
```

JMeter se chay tren GitHub Actions bang workflow `jmeter-performance.yml`.

## 3. Tao repo GitHub

1. Vao GitHub va tao repository moi.
2. Dat ten goi y: `software-testing-final-projects`.
3. Khong can chon template.
4. Copy URL repository, vi du:

```text
https://github.com/your-username/software-testing-final-projects.git
```

## 4. Commit va push theo thoi gian

Dung cach commit tung phan. Khong commit tat ca mot lan.

Lan 1:

```bash
git add README.md .gitignore package.json package-lock.json docs 01-blackbox-testing .github/workflows/blackbox-docs.yml
git commit -m "Initialize repository with blackbox testing assignment"
git branch -M main
git remote add origin https://github.com/your-username/software-testing-final-projects.git
git push -u origin main
```

Lan 2:

```bash
git add 02-whitebox-testing .github/workflows/whitebox-tests.yml
git commit -m "Add whitebox testing with Jest coverage"
git push
```

Lan 3:

```bash
git add 03-swagstore-cicd .github/workflows/swagstore-ci-cd.yml
git commit -m "Add SwagStore CI CD with Jest tests"
git push
```

Lan 4:

```bash
git add 04-api-testing-restful-booker .github/workflows/api-newman.yml
git commit -m "Add Restful Booker API tests with Newman"
git push
```

Lan 5:

```bash
git add 05-ui-automation-orangehrm .github/workflows/orangehrm-ui.yml
git commit -m "Add OrangeHRM UI automation tests"
git push
```

Lan 6:

```bash
git add 06-performance-jmeter .github/workflows/jmeter-performance.yml
git commit -m "Add JMeter performance testing assignment"
git push
```

## 5. Deployment Render cho SwagStore

1. Vao Render.
2. Chon New Web Service.
3. Connect GitHub repo.
4. Cau hinh:
   - Build command: `npm install`
   - Start command: `npm run start:swagstore`
5. Bat Auto Deploy tu branch `main`.
6. Sau khi deploy xong, copy link Render vao `README.md`.

Neu muon workflow tu trigger Render:

1. Trong Render, tao Deploy Hook.
2. Trong GitHub repo, vao Settings > Secrets and variables > Actions.
3. Tao secret:

```text
RENDER_DEPLOY_HOOK_URL
```

4. Paste deploy hook URL vao secret.

## 6. Nhung thu nen chup anh de nop

- Tab GitHub Actions co nhieu workflow runs theo thoi gian.
- WhiteBox coverage report.
- Newman API test pass.
- Playwright OrangeHRM UI test pass.
- JMeter HTML report summary.
- Render/Railway deployed website.

## 7. Noi dung bao cao ngan gon

Khi viet bao cao, nen ghi:

- BlackBox: da dung EP, BVA, Decision Table, State Transition.
- WhiteBox: da viet unit test Jest va dat coverage cao.
- CI/CD: moi push len GitHub se tu chay test; deploy tu dong qua Render/Railway.
- API: chon Restful-Booker trong danh sach API 19-24, test du CRUD va auth.
- UI: dung Playwright test login va dieu huong OrangeHRM.
- Performance: dung JMeter voi 5 users, ramp-up 10s, loop 3 lan.

