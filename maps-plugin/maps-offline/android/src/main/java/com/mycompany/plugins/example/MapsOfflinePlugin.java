package com.mycompany.plugins.example;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MapsOffline")
public class MapsOfflinePlugin extends Plugin {

    private MapView mapView;

    @Override
    public void load() {
        // Initial setup if needed
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        String accessToken = call.getString("accessToken");
        Mapbox.getInstance(this.getContext(), accessToken);
        call.resolve();
    }

    @PluginMethod
    public void showMap(PluginCall call) {
        double latitude = call.getDouble("latitude");
        double longitude = call.getDouble("longitude");
        double zoom = call.getDouble("zoom");

        getActivity().runOnUiThread(() -> {
            if (mapView != null) {
                mapView.onDestroy();
            }

            FrameLayout layout = new FrameLayout(getContext());
            layout.setId(View.generateViewId());
            getActivity().setContentView(layout);

            mapView = new MapView(getContext());
            layout.addView(mapView);

            mapView.getMapboxMap().loadStyleUri(Style.MAPBOX_STREETS, style -> {
                CameraOptions cameraOptions = new CameraOptions.Builder()
                        .center(Point.fromLngLat(longitude, latitude))
                        .zoom(zoom)
                        .build();
                mapView.getMapboxMap().setCamera(cameraOptions);
            });

        });
        call.resolve();
    }
}
