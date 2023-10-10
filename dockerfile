FROM java:8

LABEL maintainer = "zisuzin1978@gmail.com"

VOLUME / tmp

EXPOSE 8010

ARG JAR_FILE=target/test.jar

ENTRYPOINT ["java", "-jar", "/test.jar"]