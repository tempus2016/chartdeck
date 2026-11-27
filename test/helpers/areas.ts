import type { HomeAssistant } from '../../src/types';
import { makeHass } from './hass';

/** A kitchen with one sensor of each kind an area section treats differently, and a loft with none. */
export function kitchenHass(): HomeAssistant {
  const hass = makeHass({
    'sensor.kitchen_temp': ['21.5', { device_class: 'temperature', friendly_name: 'Kitchen temperature' }],
    'sensor.kitchen_humidity': ['48', { device_class: 'humidity', friendly_name: 'Kitchen humidity' }],
    'sensor.fridge_power': ['85', { device_class: 'power', friendly_name: 'Fridge power' }],
    'sensor.fridge_battery': ['70', { device_class: 'battery', friendly_name: 'Fridge battery' }],
    'sensor.oven_energy': ['3.2', { device_class: 'energy', friendly_name: 'Oven energy' }],
    'sensor.kitchen_count': ['3', { friendly_name: 'Kitchen count' }],
    'sensor.kitchen_mode': ['eco', { friendly_name: 'Kitchen mode' }],
    'input_number.kitchen_target': ['20', { device_class: 'temperature', friendly_name: 'Kitchen target' }],
    'sensor.hidden_co2': ['400', { device_class: 'carbon_dioxide', friendly_name: 'Hidden CO2' }],
    'sensor.filter_changed': ['unknown', { device_class: 'date', friendly_name: 'Filter changed' }],
    'sensor.kettle_power': ['unknown', { device_class: 'power', unit_of_measurement: 'W', friendly_name: 'Kettle' }],
    'light.loft': ['on', { friendly_name: 'Loft light' }],
  });
  const inKitchen = { area_id: 'kitchen', labels: [] };
  hass.entities = {
    'sensor.kitchen_temp': { entity_id: 'sensor.kitchen_temp', ...inKitchen },
    'sensor.kitchen_humidity': { entity_id: 'sensor.kitchen_humidity', device_id: 'dev_k', labels: [] },
    'sensor.fridge_power': { entity_id: 'sensor.fridge_power', ...inKitchen },
    'sensor.fridge_battery': { entity_id: 'sensor.fridge_battery', ...inKitchen },
    'sensor.oven_energy': { entity_id: 'sensor.oven_energy', ...inKitchen },
    'sensor.kitchen_count': { entity_id: 'sensor.kitchen_count', ...inKitchen },
    'sensor.kitchen_mode': { entity_id: 'sensor.kitchen_mode', ...inKitchen },
    'input_number.kitchen_target': { entity_id: 'input_number.kitchen_target', ...inKitchen },
    'sensor.hidden_co2': { entity_id: 'sensor.hidden_co2', ...inKitchen, hidden: true },
    'sensor.filter_changed': { entity_id: 'sensor.filter_changed', ...inKitchen },
    'sensor.kettle_power': { entity_id: 'sensor.kettle_power', ...inKitchen },
    'light.loft': { entity_id: 'light.loft', area_id: 'loft', labels: [] },
  };
  hass.devices = { dev_k: { id: 'dev_k', area_id: 'kitchen', labels: [] } };
  hass.areas = {
    kitchen: { area_id: 'kitchen', name: 'Kitchen' },
    loft: { area_id: 'loft', name: 'Loft' },
  };
  return hass;
}
