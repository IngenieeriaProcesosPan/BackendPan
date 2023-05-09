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
primary key(idmedida),
constraint fk_insumos_idmedida
foreign key(idinsumo)
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
clave varchar(20) not null,
administrador tinyint not null,
activo tinyint not null,
primary key(idusuario)
);

create table if not exists turno(
idturno int not null auto_increment,
fondo decimal(10,2) not null,
apertura datetime not null,
cierre datetime null,
idusuario int,
efectivo decimal(10,2),
primary key(idturno),
constraint fk_turno_idusuario
foreign key(idusuario)
references usuarios(idusuario)
on delete restrict on update cascade
);

create table if not exists cheques(
folio bigint not null auto_increment,
apertura datetime not null,
cierre datetime null,
pagado tinyint not null,
cancelado tinyint not null,
cambio decimal(10,2) null,
idturno int not null,
total decimal(10,2) null,
primary key(folio),
constraint fk_cheques_folio
foreign key(idturno)
references turno(idturno)
on delete restrict on update cascade
);

create table if not exists cheqdet(
foliodet bigint not null,
movimiento int not null,
cantidad int not null,
idproducto int not null,
primary key(foliodet, movimiento),
constraint fk_cheqdet_foliodet
foreign key(foliodet)
references cheques(folio)
on delete restrict on update cascade,
constraint fk_cheqdet_idproducto
foreign key(idproducto)
references productos(idproducto)
on delete restrict on update cascade
);


