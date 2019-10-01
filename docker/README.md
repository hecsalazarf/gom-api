# Dockerize Gom Api

## Create image
Within a terminal, go to the project root folder and compile the application,
```bash
$ npm run prestart:prod
```

then run the Docker build command.
```bash
$ docker build -t hecsalazarf/gom-api:0.2 .
```

This will build an image from the *Dockerfile* file with a *hecsalazarf/gom-api:0.2* tag.

## Save image
You can either upload your image to your Docker Hub registry or save it locally. In case of a local backup, you may want to run:
```bash
$ docker image save -o gom-api-image.tar hecsalazarf/gom-api:0.2
```

where *gom-api-image.tar* is the TAR file that will be created from the image *hecsalazarf/gom-api:0.2*.

## Import image
To import an image from a TAR file, run:
```bash
$ docker image import gom-api-image.tar
```