/* eslint-disable camelcase */
import ogr2ogr from './allJsFunctions/application/ogr2ogr';
import gdal_translate from './allJsFunctions/application/gdal_translate';
import gdal_rasterize from './allJsFunctions/application/gdal_rasterize';
import gdalwarp from './allJsFunctions/application/gdalwarp';
import gdaltransform from './allJsFunctions/application/gdaltransform';
import gdal_location_info from './allJsFunctions/application/gdal_location_info';
import gdalinfo from './allJsFunctions/application/gdalinfo';
import ogrinfo from './allJsFunctions/application/ogrinfo';

import open from './allJsFunctions/function/open';
import close from './allJsFunctions/function/close';
import getInfo from './allJsFunctions/function/getInfo';
import getOutputFiles from './allJsFunctions/function/getOutputFiles';
import getFileBytes from './allJsFunctions/function/getFileBytes';

import { drivers } from './allJsFunctions/helper/drivers';

export default {
    ogr2ogr,
    gdal_translate,
    gdal_rasterize,
    gdalwarp,
    gdaltransform,
    gdal_location_info,
    gdalinfo,
    ogrinfo,
    open,
    close,
    getInfo,
    getOutputFiles,
    getFileBytes,
    drivers,
};
