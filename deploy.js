const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const config = {
    user: "petchpa2",
    // Password optional, prompted if none given
    password: "iyg8Y2p03P",
    host: "ftp.petchpanda.com",
    port: 2002,
    localRoot: __dirname + "/dist",
    remoteRoot: "/domains/petchpanda.com/public_html/myresume",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    // include: ["*.php", "dist/*", ".*"],
    include: ["*", "**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

// console.log(config);

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));