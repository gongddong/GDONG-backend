### GDONG-backend

## Development

### Docker-compose를 통해 개발하기

docker-compose를 통해 DB와 쉽게 연동할 수 있습니다.

```bash
yarn dc:build # docker-compose로 새로운 패키지를 적용할 때 빌드
yarn dc:up # docker-compose를 통해 PostgreSQL, Redis, NestJS를 한 번에 실행
yarn dc:stop # 실행 종료
yarn dc:rm # compose된 컨테이너 삭제
```

## API Docs

Swagger를 이용합니다. `http://localhost:3000/api`
