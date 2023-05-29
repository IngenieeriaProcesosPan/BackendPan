-- DATABASE
create database if not exists panaderia;
use panaderia;

create table if not exists medidas_insumos(
idmedida int not null auto_increment,
nombre varchar(30) not null,
primary key(idmedida)
);

create table if not exists insumos(
idinsumo int not null auto_increment,
nombre varchar(30) not null,
idmedida int not null,
primary key(idinsumo),
constraint fk_insumos_idmedida
foreign key(idmedida)
references medidas_insumos(idmedida)
on delete restrict on update cascade
);

create table if not exists almacen(
idalmacen int not null auto_increment,
nombre varchar(30) not null,
primary key(idalmacen)
);

create table if not exists stock_almacen(
idalmacen int not null auto_increment,
idinsumo int not null,
cantidad decimal(10,5),
primary key(idalmacen, idinsumo),
constraint fk_stock_almacen_idinsumo
foreign key(idinsumo)
references insumos(idinsumo)
on delete restrict on update cascade,
constraint fk_stock_almacen_idalmacen
foreign key(idalmacen)
references almacen(idalmacen)
on delete restrict on update cascade
);

create table if not exists productos(
idproducto int not null auto_increment,
descripcion varchar(30) not null,
precio decimal(10,2) not null,
primary key(idproducto)
);

create table if not exists usuarios(
idusuario int not null auto_increment,
nombre varchar(30) not null,
clave varchar(50) not null,
administrador tinyint not null,
activo tinyint not null,
primary key(idusuario)
);

create table if not exists turno(
idturno int not null auto_increment,
fondo decimal(10,2) not null,
apertura datetime not null,
cierre datetime null,
idusuario int not null,
efectivo decimal(10,2),
primary key(idturno),
constraint fk_turno_idusuario
foreign key(idusuario)
references usuarios(idusuario)
on delete restrict on update cascade
);

create table if not exists estatus(
idestatus int not null auto_increment,
estatus varchar(45) not null,
primary key(idestatus)
);

create table if not exists ventas(
folio bigint not null auto_increment,
apertura datetime not null,
cierre datetime null,
idestatus int not null,
idturno int not null,
total decimal(10,2) null,
primary key(folio),
constraint fk_ventas_idturno
foreign key(idturno)
references turno(idturno)
on delete restrict on update cascade,
constraint fk_ventas_idestatus
foreign key(idestatus)
references estatus(idestatus)
on delete restrict on update cascade
);

create table if not exists detalleVentas(
foliodet bigint not null,
movimiento int not null,
cantidad int not null,
idproducto int not null,
precio int not null,
idestatus int not null,
primary key(foliodet, movimiento),
constraint fk_detalleVentas_foliodet
foreign key(foliodet)
references ventas(folio)
on delete restrict on update cascade,
constraint fk_detalleVentas_idproducto
foreign key(idproducto)
references productos(idproducto)
on delete restrict on update cascade,
constraint fk_detalleVentas_idestatus
foreign key(idestatus)
references estatus(idestatus)
on delete restrict on update cascade
);



create table if not exists recetas_productos(
idproducto int not null,
idinsumo int not null,
cantidad decimal(10,4),
primary key(idproducto, idinsumo),
constraint fk_recetas_productos_idproducto
foreign key(idproducto)
references productos(idproducto)
on delete restrict on update cascade,
constraint fk_recetas_productos_idinsumo
foreign key(idinsumo)
references insumos(idinsumo)
on delete restrict on update cascade
);

create table if not exists stock_productos(
idproducto int not null,
cantidad int not null,
primary key(idproducto),
constraint fk_stock_productos_idproducto
foreign key(idproducto)
references productos(idproducto)
on delete restrict on update cascade
);

create table if not exists produccion_productos(
fechaproduccion datetime not null,
idproducto int not null,
cantidad int not null,
primary key(idproducto, fechaproduccion),
constraint fk_produccion_productos_idproducto
foreign key(idproducto)
references productos(idproducto)
on delete restrict on update cascade
);

insert into usuarios (nombre, clave, administrador, activo) values ("admin", "202cb962ac59075b964b07152d234b70", 1, 1);

