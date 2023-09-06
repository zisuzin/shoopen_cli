module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost', // API 서버의 주소
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/store/db.php', // 실제 API 엔드포인트
                },
            },
        },
    },
};
