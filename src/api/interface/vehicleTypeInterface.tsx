export interface VehicleTypeInterface {
    success?: boolean;
    vehicleTypedata?: VehicleTypeDataInterface;
    allVehicle?:VehicleTypeDataInterface;
    rentalVehicleTypedata?:VehicleTypeDataInterface;
    loading?: boolean
}

export interface VehicleTypeDataInterface {
    id: number,
    name: string,
    vehicle_image_id: number,
    slug: string,
    created_by_id: string,
    capacity: number,
    min_fare: number,
    min_distance: number,
    per_distance: number,
    cancellation_charge: number,
    waiting_time_limit: number,
    status: number,
    created_at: string,
    updated_at: string,
    deleted_at: null,
    vehicle_image: vehicleImageInterface,
    zones: zoneInterface[]
}

export interface vehicleImageInterface {
    id: number,
    name: string,
    file_name: string,
    mime_type: string,
    disk: string,
    size: string,
    created_by_id: null,
    created_at: string,
    original_url: string,
    preview_url: string
}

export interface zoneInterface {
    id: number,
    name: string,
    place_points: placePointInterface
}

export interface placePointInterface {
    type: string,
    coordinates: number
}
