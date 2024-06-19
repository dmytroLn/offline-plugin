// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MapsOffline",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "MapsOffline",
            targets: ["MapsOfflinePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "MapsOfflinePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/MapsOfflinePlugin"),
        .testTarget(
            name: "MapsOfflinePluginTests",
            dependencies: ["MapsOfflinePlugin"],
            path: "ios/Tests/MapsOfflinePluginTests")
    ]
)