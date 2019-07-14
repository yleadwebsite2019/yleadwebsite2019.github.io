

from flask import Flask, render_template, redirect, url_for, request

app= Flask(__name__)


@app.route('/')
def index():
	return redirect(url_for('home'))

#DONE
@app.route('/Home')
def home():
	return render_template('home.html')

#DONE
@app.route('/About')
def about():
	return render_template('about.html')

#DONE
@app.route('/About/Themes')
def themes():
	return render_template('themes.html')

#DONE
@app.route("/About/Principals_Words")
def principals_words():
	return render_template('principals_words.html')

#DONE
@app.route('/Programs')
def programs():
	return render_template('programs.html')

@app.route('/Programs/Opening_Ceremony')
def opening_ceremony():
	return render_template('opening_ceremony.html')

#DONE
@app.route('/Programs/Leadership_Character_Development')
def leadership_character_development():
	return render_template('leadership_character_development.html')

#DONE
@app.route('/Programs/Learning_Journeys')
def learning_journeys():
	return render_template('learning_journeys.html')

#DONE
@app.route('/Programs/Panel_Discussion')
def panel_discussion():
	return render_template('panel_discussion.html')

@app.route('/Programs/Fifteen_Hours_Challenge')
def fifteen_hour_challenge():
	return render_template('fifteen_hours_challenge.html')

@app.route('/Information/Packing_List')
def packing_list():
	return render_template('packing_list.html')

@app.route('/Information/Participating_Schools')
def participating_schools():
	return render_template('participating_schools.html')

@app.route('/Information/Documents_For_Overseas_Participants')
def documents_for_overseas_participants():
	return render_template('documents_for_overseas_participants.html')

#DONE
@app.route('/Information/Questions_n_Answers')
def questions_n_answers():
	return render_template('questions_n_answers.html')

#DOING
@app.route('/Bonus/Fam_LEAD')
def fam_lead():
	return render_template('fam_lead.html')

@app.route('/Articles/Smart_Nation')
def smart_nation():
	return render_template('smart_nation.html')

@app.route('/Articles/Changemakers')
def changemakers():
	return render_template('changemakers.html')

@app.route('/Bonus/Pre-event_Interview')
def pre_event_interview():
	return render_template('pre-event_interviews.html')

@app.route('/Bonus/Post-Event_Interview')
def post_event_interview():
	return render_template('post-event_interview.html')

if __name__ == '__main__':
	app.run(host="0.0.0.0")