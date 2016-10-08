import React from 'react';
import { Link } from 'react-router';

// Material UI
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './Research.css';

const Research = () => {
	return (
		<section className="card-wrapper">
			<Card className="card">
				<CardTitle title="Our Research" subtitle="Our research on the sudoku solving algorithm" />
				<CardText>
					<section>
						<h3>Introduction</h3>
						<p>Quisque hendrerit tortor non libero lacinia, in vehicula lorem consequat. Suspendisse sit amet finibus neque. Duis vel magna in est auctor tincidunt eget vel dolor. Quisque sed bibendum justo, vitae pulvinar nisi. Quisque felis risus, elementum id elementum quis, vulputate vel libero. Proin non elit at metus ultricies placerat vel sit amet dolor. Etiam efficitur pulvinar diam in eleifend. Nullam nec neque quis sapien vestibulum lobortis eget in nisi. Vestibulum non fringilla ante, ut sodales elit. Integer fringilla egestas gravida. Nulla nec nulla posuere, euismod enim id, bibendum arcu. Cras et pretium neque. Nunc faucibus congue massa sit amet interdum. Fusce magna nunc, rutrum sit amet justo nec, porttitor condimentum nunc. Sed vitae volutpat turpis, quis maximus erat. Mauris dapibus, massa non finibus vulputate, nulla elit mattis tellus, quis posuere tortor urna quis libero.</p>
					</section>
					<section>
						<h3>Problem</h3>
						<p>Fusce consectetur risus nec nunc iaculis imperdiet. Praesent pharetra magna augue, vel rutrum ante euismod ut. Mauris fermentum nunc enim, eget accumsan enim volutpat vitae. Nulla porta, augue at imperdiet viverra, nibh massa rhoncus leo, id interdum ante ex vitae tortor. Maecenas in ornare nibh. Nulla egestas maximus ullamcorper. Praesent pretium eleifend nibh non volutpat. Donec finibus rutrum metus, quis fringilla ante ullamcorper condimentum.</p>
						<p>Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla gravida, urna pretium eleifend tincidunt, risus augue tempus enim, eget tristique diam dolor vestibulum arcu. Cras consequat magna vestibulum cursus efficitur. Suspendisse et convallis mauris, molestie faucibus metus. Proin at purus id sem ullamcorper posuere. Sed viverra aliquet nunc, ut rhoncus tellus faucibus sit amet. Mauris maximus consequat ligula quis luctus. Nunc at placerat nunc. Duis imperdiet dignissim diam, at tristique ante cursus id. Nullam ut aliquam lectus, ac auctor tellus. Nam condimentum, massa id convallis finibus, tortor nunc pharetra lorem, eget ornare nunc dolor vitae quam. In nisi dolor, commodo id purus ac, ultrices feugiat mi.</p>
					</section>
					<section>
						<h3>Approach</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non condimentum nisl, sed dignissim turpis. Nullam pellentesque odio vel tortor commodo, non mollis tortor dignissim. Integer quis urna et elit accumsan sagittis. Sed et facilisis felis, ut lacinia dui. Morbi ullamcorper tempus auctor. Quisque a justo nec ante tincidunt porta. Etiam fermentum tortor id vulputate tempor. Quisque ac suscipit risus. Vestibulum eu mauris tincidunt, bibendum tellus non, egestas sem. Fusce maximus faucibus elit ac feugiat. Sed ultricies urna nec augue pretium, vitae facilisis augue vehicula. Suspendisse quis aliquet nisl. Nulla fermentum eleifend mollis. Duis consectetur dui in lacinia sollicitudin.</p>
						<p>Fusce cursus non odio a tincidunt. Phasellus purus dui, maximus eu diam eu, pulvinar dignissim lorem. Nam aliquam lorem metus, quis vehicula libero lacinia ut. Cras finibus et erat a sodales. Sed nec posuere ipsum. Praesent lacus nulla, euismod vel cursus eget, sollicitudin at ligula. Mauris malesuada justo quis vulputate scelerisque. Suspendisse sagittis sit amet diam et molestie. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquet diam et ante condimentum, sed pellentesque ligula aliquet. Vivamus ultricies, ligula ac scelerisque consequat, ex ante viverra diam, sit amet tincidunt nibh diam eget mi. Donec sollicitudin ligula quis eros lacinia ornare.</p>
					</section>
					<section>
						<h3>Solution</h3>
						<p>Mauris auctor urna lobortis metus vulputate ullamcorper scelerisque in dui. Integer nunc augue, molestie sit amet sem a, suscipit mattis nisi. Fusce rhoncus rutrum finibus. Integer scelerisque rhoncus tempor. Vestibulum rutrum dapibus dui, vel euismod elit ultricies quis. Curabitur convallis lectus ut nibh condimentum, eu posuere urna sollicitudin. In leo ex, congue hendrerit luctus ut, placerat at neque. Sed at dictum enim, quis egestas erat. In sagittis urna nec velit tristique, malesuada eleifend odio venenatis. Vivamus a nisi tristique tortor posuere gravida at eu lectus.</p>
					</section>
					<section>
						<h3>Algorithm</h3>
						<p>Vestibulum at turpis non sapien interdum dignissim fermentum ac nisl. Maecenas dignissim suscipit ultricies. Suspendisse congue lorem urna. In aliquam, leo et maximus interdum, ligula mi pharetra felis, sed sodales enim dolor aliquam orci. Integer a interdum dolor. Integer urna dolor, rutrum quis felis nec, laoreet laoreet est. Pellentesque elementum lacus a venenatis viverra. Quisque nec metus ullamcorper, consectetur urna a, lobortis nibh. Cras id sem ac elit malesuada lacinia at quis nisl. Nulla sed faucibus ipsum, ac imperdiet nisl. Integer ut gravida elit, malesuada scelerisque nisi. Nulla ac enim vehicula, fermentum lacus non, luctus ante. Morbi a vulputate tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sed euismod mauris, et volutpat quam.</p>
						<p>Donec consectetur auctor nunc. Sed feugiat dui vitae neque tempus, sed pellentesque metus lobortis. Suspendisse vel erat aliquet, fringilla nunc sit amet, eleifend magna. Pellentesque ornare ac libero a interdum. In vulputate erat placerat velit aliquam, nec placerat metus venenatis. Curabitur euismod, nisl vel hendrerit hendrerit, nunc velit dapibus massa, ac faucibus orci ligula sit amet dui. Duis gravida dui at dolor pretium, nec suscipit tellus auctor. Mauris nibh ligula, dignissim sit amet dictum nec, vestibulum in nisl.</p>
						<p>Phasellus commodo metus in mauris eleifend varius. Praesent ultrices eros ac sodales tincidunt. Vestibulum at risus sit amet libero vestibulum hendrerit quis sit amet nunc. In quis blandit ante. Pellentesque lobortis libero nec ligula tincidunt aliquet. Sed sodales dolor at metus maximus, id accumsan libero vulputate. Pellentesque nec lacus neque. Proin ornare blandit lorem a euismod.</p>
					</section>
					<section>
						<h3>Conclution</h3>
						<p>Sed molestie rutrum lorem, et porta ligula eleifend non. Ut et cursus justo. Curabitur ultrices tortor a neque mollis vestibulum. Fusce risus nibh, sodales in justo id, ornare pretium libero. In auctor sed nibh ac rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lacinia sapien ut felis efficitur malesuada. Nunc ante turpis, vehicula non dignissim sit amet, gravida et quam. Suspendisse potenti. Donec eleifend augue nunc, vitae facilisis nunc interdum a. Donec sit amet hendrerit sapien. Curabitur fringilla eleifend neque in blandit. Quisque vel metus maximus, efficitur neque ut, hendrerit augue.</p>
					</section>
					<section>
						<h3>Advice</h3>
						<p>Curabitur a erat blandit, elementum purus nec, pretium metus. Vestibulum ut porttitor turpis, et aliquam turpis. Nam faucibus, urna vitae suscipit feugiat, mauris nibh tincidunt lectus, sit amet posuere dui ipsum et lectus. Sed suscipit massa eros, nec scelerisque mi fringilla sit amet. Suspendisse pharetra arcu ac felis ultrices, sed laoreet nisl fermentum. Nulla eget risus nec neque accumsan porttitor. Maecenas pellentesque elementum velit, in ultrices neque rhoncus eu. Duis eu arcu id justo euismod rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo urna tellus, in posuere odio rhoncus quis. Nulla euismod, justo non fringilla sodales, nisi neque lacinia turpis, at vestibulum nulla ex nec felis. Maecenas non convallis turpis, vel faucibus elit. Duis elementum convallis faucibus. Sed dictum augue ac dui lacinia consectetur.</p>
					</section>
				</CardText>
				<CardActions>
					<Link to="/sudoku">
						<RaisedButton label="Show me the demo algorithm" primary={true} />
					</Link>
				</CardActions>
			</Card>
		</section>
	);
};

export default Research;
