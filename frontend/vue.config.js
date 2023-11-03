module.exports = {
    publicPath: '/frontend/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost', // API 서버의 주소
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/store/db.php', // 실제 API 엔드포인트
                },
            },
            '/photo': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: {
                    '^/photo': '/board/photo_reviews.php',
                },
            },
            '/general': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: {
                    '^/general': '/board/general_reviews.php',
                },
            },
        },
    },
};
