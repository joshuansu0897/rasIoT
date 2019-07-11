Tenemos un *Arduino* y una *Raspberrypi* montado sobre un *carrito de contro remoto*. Se quiere controlar dicho carrito desde un *[servidor](https://github.com/joshuansu0897/serverIoT)* externo

### Arduino
Se encarga de tomar las metricas de los sensores del carrito y mandarlos a la *Raspberrypi*, tambien se encarga de indicar al carrito en que direccion moverse.

Arduino metrica example
```Arduino
{
    FLS: 425,    // Front Left Sensor
    FRS: 400,    // Front Right Sensor
    RLS: 450,    // R Left Sensor
    RRS: 500     // R Right Sensor
}
```

### Raspberrypi
Toma las metricas que le manda el *Arduino* y las manda a un ,

Toma la informacion que manda un *Arduino* y la manda a un


