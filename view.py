import eel
import desktop
import mynavi


app_name="web"
end_point="index.html"
size=(600,700)

@ eel.expose
def job_system(kw_search, csv_name, box_name):
    output_data = mynavi.main(kw_search, csv_name, box_name)
    return output_data


desktop.start(app_name,end_point,size)